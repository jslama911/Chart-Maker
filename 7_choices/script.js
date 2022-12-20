/* Submit function to create chart */
function submit(){

    /* Get values from form */
    var e = document.getElementById("Title").value;
    var d = document.getElementById("Type").value;
    var x = document.getElementById("Item1").value;
    var y = document.getElementById("Item2").value;
    var z = document.getElementById("Item3").value;
    var w = document.getElementById("Item4").value;
    var v = document.getElementById("Item5").value;
    var u = document.getElementById("Item6").value;
    var t = document.getElementById("Item7").value;
    var a = document.getElementById("Count1").value;
    var b = document.getElementById("Count2").value;
    var c = document.getElementById("Count3").value;
    var f = document.getElementById("Count4").value;
    var g = document.getElementById("Count5").value;
    var h = document.getElementById("Count6").value;
    var i = document.getElementById("Count7").value;
    
    /*Pie Chart*/
    if (d == "Pie") {
    var xValues = [x, y, z, w, v, u, t];
    var yValues = [a, b, c, f, g, h, i];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#7FDBFF",
        "#FF851B",
        "#FFDC00",
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
    var xValues = [x, y, z, w, v, u, t];
    var yValues = [a, b, c, f, g, h, i];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#7FDBFF",
      "#FF851B",
        "#FFDC00",
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
    