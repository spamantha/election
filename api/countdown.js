export default function handler(req, res) {
    const electionDate = new Date("2024-11-05T00:00:00Z"); // UTC timezone for consistency
    const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
    const timeDiff = electionDate - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(daysLeft.toString());
}
