function extractTime(timestamp) {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Get hours, minutes, and seconds
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Ensure 2 digits
  const seconds = String(date.getSeconds()).padStart(2, "0"); // Ensure 2 digits

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? String(hours).padStart(2, "0") : "12"; // Convert hour 0 to 12

  // Return the time in HH:MM:SS AM/PM format
  return `${hours}:${minutes} ${ampm}`;
}

export default extractTime;
