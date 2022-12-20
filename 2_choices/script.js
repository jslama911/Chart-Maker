/* Submit function to create chart */
function submit(){

    /* Get values from form */
    var e = document.getElementById("Title").value;
    var d = document.getElementById("Type").value;
    var x = document.getElementById("Item1").value;
    var y = document.getElementById("Item2").value;
    var a = document.getElementById("Count1").value;
    var b = document.getElementById("Count2").value;
    
    /*Pie Chart*/
    if (d == "Pie") {
    var xValues = [x, y];
    var yValues = [a, b];
    var barColors = [
      "#b91d47",
      "#00aba9",
    ];
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: e
        }
      }
    });
    } else if (d == "Bar") {
    var xValues = [x, y];
    var yValues = [a, b];
    var barColors = [
      "#b91d47",
      "#00aba9",
    ];
    /*Bar Graph*/
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: e
        },
        scales: {
          yAxes: [{ticks: {min: 0}}]
        }
      }
    });
    } 
    }
    