export default function handler(req, res) {
    // Define Election Day date
    const electionDate = new Date("2024-11-05");
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the difference in time
    const timeDiff = electionDate - currentDate;
    // Convert time difference from milliseconds to days
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Set response content type to plain text
    res.setHeader("Content-Type", "text/plain");
    // Send the days left as a plain text response
    res.status(200).send(daysLeft.toString());
}
