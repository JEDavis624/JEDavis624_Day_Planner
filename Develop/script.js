$(document).ready(function() {
  
    // test flag
    const test = false;
  
    // get times from moment
    const now =  moment().format('MMMM Do YYYY, h:mm:ss a');
  
    // commented out for test in non-standard hours
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');
  
    // set times for tesitng after hours
    if (test) {
      nowHour24 = 13;
      nowHour12 = 1;
    }
  
    let currentDay = $('#currentDay');
    currentDay.text(now);
    
    // change description here - none
    const saveIcon = ("./images/save-regular.svg"); 
  
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
  
    if (test) { console.log(storedPlans); }
  
    // If plans were retrieved from localStorage, update the plan array to it
    if (storedPlans !== null) {
      planTextArr = storedPlans;
    } else {
      // this should only occur on first time the app is loaded in the browser
      // helpfully remind user that lunch is important
      planTextArr = new Array(9);
      planTextArr[4] = "Picnic lunch outside";
    }
  
    if (test) { console.log("full array of plned text",planTextArr); }
  
    // set variable referencing planner element
    let plannerDiv = $('#plannerContainer');
    // clear existing elements
    plannerDiv.empty();
  
    if (test) { console.log("current time",nowHour12); }

     // build calendar by row for fix set of hours
     for (let hour = 9; hour <= 17; hour++) {
        // index for array use offset from hour
        let index = hour - 9;
        
        // build row components
        let $rowDiv = $('<div>');
        $rowDiv.addClass('row');
        $rowDiv.addClass('plannerRow');
        $rowDiv.attr('hour-index',hour);
      
        // Start building Time box portion of row
        let $col2TimeDiv = $('<div>');
        $col2TimeDiv.addClass('col-md-2');
      
        // create timeBox element (contains time)
        const $timeBoxSpn = $('<span>');
        // can use this to get value
        $timeBoxSpn.attr('class','timeBox');
        
        // format hours for display
        let displayHour = 0;
        let ampm = "";
        if (hour > 12) { 
          displayHour = hour - 12;
          ampm = "pm";
        } else {
          displayHour = hour;
          ampm = "am";
        }
        
        // populate timeBox with time
        $timeBoxSpn.text(`${displayHour} ${ampm}`);
    
        // insert into col inset into timebox
        $rowDiv.append($col2TimeDiv);
        $col2TimeDiv.append($timeBoxSpn);
        // STOP building Time box portion of row

        
  });



