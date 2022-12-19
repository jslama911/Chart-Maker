
function submit(){

var e = document.getElementById("Title").value;
var d = document.getElementById("Type").value;
var x = document.getElementById("Item1").value;
var y = document.getElementById("Item2").value;
var z = document.getElementById("Item3").value;
var a = document.getElementById("Count1").value;
var b = document.getElementById("Count2").value;
var c = document.getElementById("Count3").value;


if (d == "Pie") {
var xValues = [x, y, z];
var yValues = [a, b, c];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
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
var xValues = [x, y, z];
var yValues = [a, b, c];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
];

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
} else {
	alert("Please enter bar or pie");
}
}
