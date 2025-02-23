import dayjs from 'dayjs'; 
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import MicroModal from 'micromodal';

// Extend dayjs with plugins
dayjs.extend(utc);        // Extend with UTC first
dayjs.extend(timezone);   // Then extend with timezone
// Initialize MicroModal
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
document.getElementById("timezone-select-btn").addEventListener("click", ()=> {updateTime();});



setInterval(updateTime, 1000);  // Set the interval to 1000ms (1 second)
updateTime();