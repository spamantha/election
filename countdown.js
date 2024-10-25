const electionCountdown = () => {
    const electionDate = new Date("2024-11-05");
    const currentDate = new Date();
    const timeDiff = electionDate - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    console.log(daysLeft); // for testing
    return daysLeft;
};

electionCountdown();
