import Conversation from "../model/conversation.js";
import Message from "../model/messages.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const oneMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await conversation.messages.push(oneMessage._id);

    await Promise.all([conversation.save(), oneMessage.save()]);

    return res.status(201).json(oneMessage);
  } catch (err) {
    console.log("Error in the messages Controller", err);
    res.status(501).send("Internal Server Error");
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) return res.status(201).send([]);

    const messages = conversation.messages;

    res.status(201).json(messages);
  } catch (err) {
    console.log("Error on GetMessage controller", err);
    res.status(501).send("Internal Server Error");
  }
};