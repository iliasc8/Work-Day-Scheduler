// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var tasks = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save tasks in local storage
        localStorage.setItem(time, tasks);
    })
   
    function timeTracker() {
        //get current number of hours.
        var presentTime = moment().hour();
      

        // loop over time blocks
        $(".time-block").each(function () {
            var workSchedulTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (workSchedulTime < presentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (workSchedulTime === presentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    for (var i =8; i <18 ; i++){
        $(`#hour${i} .description`).val(localStorage.getItem(`hour${i}`));
    }   
    

    timeTracker();
})