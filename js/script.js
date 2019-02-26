google.charts.load('current', {'packages':['corechart']});
google.charts.load("current", {packages:['corechart']});

// callback Charts
google.charts.setOnLoadCallback(chartOne);
google.charts.setOnLoadCallback(chartTwo);
google.charts.setOnLoadCallback(chartThree);
google.charts.setOnLoadCallback(chartFour);

// pie chart for seasons
function chartOne() {

  var data = google.visualization.arrayToDataTable([
    ['Favourite Season', 'How Many People In The Class'],
    ['summer', 6],
    ['autumn', 1],
    ['winter', 1],
    ['spring', 2],
  ]);

  var options = {
    colors: ['#83CFC7', '#BBA3BA', '#EB9F7C', '#DC7272'],
    backgroundColor: {
      fill: 'transparent'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('topLeft'));

  chart.draw(data, options);

}

// coloumn chart for
function chartTwo() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Copper", 8.94, "#b87333"],
    ["Silver", 10.49, "silver"],
    ["Gold", 19.30, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("topRight"));
  chart.draw(view, options);

}

google.charts.load('current', {'packages':['corechart']});
      

      function chartThree() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('bottomLeft'));
        chart.draw(data, options);
      
}

google.charts.load("current", {packages:["corechart"]});
      

      function chartFour() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('bottomRight'));
        chart.draw(data, options);
      }

