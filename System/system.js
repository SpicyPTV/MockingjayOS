const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

setInterval(function() {
  // Time & Date

  const d = new Date();
  let month = monthName[d.getMonth()];
  let day = weekday[d.getDay()];
  let dayNumber = d.getDate();
  let year = d.getFullYear();

  let hour = d.getHours();
  let minutes = d.getMinutes();

  document.getElementById('date').innerHTML = day + " " + dayNumber + " " + month + " " + year;
  document.getElementById('time').innerHTML = hour + ":" + minutes;
}, 1000);

// Opens software

function open(x) {
  
}
