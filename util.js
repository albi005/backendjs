const SECONDS_PER_DAY = 86400;

const now = () => Math.floor(Date.now() / 1000);
const daysAgo = (days) => now() - days * SECONDS_PER_DAY;
const daysSince = (date) => Math.floor((now() - date) / SECONDS_PER_DAY);

module.exports = { daysAgo, daysSince };
