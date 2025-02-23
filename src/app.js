const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');          // Import UTC plugin
const timezone = require('dayjs/plugin/timezone');  // Import timezone plugin
dayjs.extend(utc);        // Extend with UTC first
dayjs.extend(timezone);   // Then extend with timezone
import MicroModal from 'micromodal';  // es6 module
MicroModal.init();

// Automatically detect the visitor's timezone
var userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Define the updateTime function
function updateTime() {
    const currentDate = dayjs().tz(userTimezone);
    const displayedTimezone = userTimezone.replace(/_/g, " ");
    document.getElementById("user-timezone").textContent = displayedTimezone;
    document.getElementById("current-time").textContent = currentDate.format("HH:mm:ss");
    document.getElementById("current-date").textContent = currentDate.format("dddd, D MMMM, YYYY");
  }

// Handle timezone selection
document.getElementById("timezone-select").addEventListener("change", function() {userTimezone = this.value;});

// Handle the Apply button click
document.getElementById("timezone-select-btn").addEventListener("click", function() {updateTime();});



setInterval(updateTime, 1000);  // Set the interval to 1000ms (1 second)
updateTime();