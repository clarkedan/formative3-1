// google chart packages
google.charts.load('current', {'packages':['corechart']});
google.charts.load("current", {packages:['corechart']});
google.charts.load('current', {'packages':['corechart']});
google.charts.load("current", {packages:["corechart"]});

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
    colors: ['#83CFC7', '#3C6361', '#DAE05C', '#A3A126'],
    backgroundColor: {
      fill: 'transparent'
    },
    fontName: 'helvetica',
    fontSize: '26',
    legend: {
      textStyle:{
        color: '#FDFFDB'
      }
    }

  };

  var chart = new google.visualization.PieChart(document.getElementById('topLeft'));

  chart.draw(data, options);

}

// coloumn chart for favourite web browser
function chartTwo() {
  var data = google.visualization.arrayToDataTable([
    ["Favourite Web Browser", "Number Of People In The Class", { role: "style" }],
    ["Safari", 1, "#83CFC7"],
    ["Chrome", 7, "#3C6361"],
    ["Internet Explorer", 0, "#A3A126"],
    ["Platinum", 2, "#DAE05C"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    bar: {groupWidth: "80"},
    legend: { position: "none" },
    backgroundColor: {
      fill: 'transparent'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("topRight"));

  chart.draw(view, options);

}

// area chart for favoiurite takeaways
  function chartThree() {
    var data = google.visualization.arrayToDataTable([
      ['Favourite Takeaways', 'Number Of People In Class'],
      ['Indian', 2],
      ['Burgers', 3],
      ['Asian', 2],
      ['Pizza', 3]
      
    ]);

    var options = {
      vAxis: {minValue: 0},
      backgroundColor: {
        fill: 'transparent'
      },
      annotations: {
        boxStyle: {
          stroke: '#fff',
          strokeWidth: '2'
        }
      }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('bottomLeft'));
    
    chart.draw(data, options);
      
}

// --------------------
      function chartFour() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2]
        ]);

        var options = {
          pieHole: 0.2,
          colors: ['#83CFC7', '#BBA3BA', '#EB9F7C', '#DC7272'],
          backgroundColor: {
            fill: 'transparent'
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('bottomRight'));
        chart.draw(data, options);
      }

