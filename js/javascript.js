window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer2", {

        title: {
            text: "Revenue Trend"
        },
        data: [ //array of dataSeries              
            { //dataSeries object

                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                type: "column",
                name: "Dates for November 2019",
                showInLegend: true,
                dataPoints: [{
                    label: "1",
                    y: 2
                }, {
                    label: "5",
                    y: 5
                }, {
                    label: "6",
                    y: 28
                }, {
                    label: "7",
                    y: 27
                }, {
                    label: "11",
                    y: 72
                }, {
                    label: "12",
                    y: 6
                }, {
                    label: "20",
                    y: 7
                }],
                axisY: {
                    prefix: "$",
                    suffix: "H",
                    includeZero: false,
                }
            }
        ]
    });

    chart.render();
}

//Password

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function check(inputvalue) {
    errors = [];
    // var username = document.getElementById("user").value;
    var password = document.getElementById("inputvalue").value;
    if (password == "SmartServTest@123") {
        errors.push("Login successfully");
        window.location = "../html/dashboard.html";

        // Redirecting to other page.

    } else {
        errors.push("Failed login!");
        return false;
    }
    if (p.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one Capital letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}