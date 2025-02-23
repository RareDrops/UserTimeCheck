const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');          // Import UTC plugin
const timezone = require('dayjs/plugin/timezone');  // Import timezone plugin
dayjs.extend(utc);        // Extend with UTC first
dayjs.extend(timezone);   // Then extend with timezone

const userTimezone = "Pacific/Auckland";

// Define the updateTime function
function updateTime() {
    const currentDate = dayjs().tz(userTimezone);
    document.getElementById("user-timezone").textContent = userTimezone;
    document.getElementById("current-time").textContent = currentDate.format("HH:mm:ss");
    document.getElementById("current-date").textContent = currentDate.format("dddd, D MMMM, YYYY");
  }


setInterval(updateTime, 1000);  // Set the interval to 1000ms (1 second)
updateTime();