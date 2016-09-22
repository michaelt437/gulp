// var Check = (function() {
//     var date = document.getElementsByTagName("td");
//     var body = document.body;

//     function Init() {
//         console.log(date);
//         details();
//     }

//     function details() {
//         date.onclick = function() {
//             if (body.classList.contains = "date") {
//                 document.getElementsByClassName("date").className = "";
//             } else {
//                 date.className = "date";
//             }
//         }
//     }



//     return {
//         init: Init
//     }
// })();

// Check.init();

$(document).ready(function() {
    $('.calendar-table td').click(function() {
        if ($('.date')[0]) {
            $('.date').removeClass('date');
            $(this).addClass('date');
        } else {
            $(this).addClass('date');
        }
    })
});