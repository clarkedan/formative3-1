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
// function chartOne() {

//     $.ajax({
//       url: "data.json",
//       dataType: "json",
//       type: "GET",
//       success:function(data){

//       var dataOne = new google.visualization.DataTable();
//       data.addColumn('string','season');
//       data.addColumn('number','percentage');
//       for (var i = 0; i < data.length; i++) {
//           data.addRow([
//                 data[i].season,
//                 data[i].percentage
//                 ]);
//           }   

//   var optionsOne = {
//     colors: ['#83CFC7', '#3C6361', '#DAE05C', '#A3A126'],
//     backgroundColor: {
//       fill: 'transparent'
//     },
//     fontName: 'helvetica',
//     fontSize: '26',
//     legend: {
//       textStyle:{
//         color: '#FDFFDB'
//       }
//     }

//   };

//   var chartOne = new google.visualization.PieChart(document.getElementById('topLeft'));

//   chart.draw(dataOne, optionsOne);

// },
// error:function(error){
//     console.log("ERROR");
//     console.log(error);
// }

//   });//ajax
// }
function chartOne() {

  var dataOne = google.visualization.arrayToDataTable([
    ['Favourite Season', 'How Many People In The Class'],
    ['summer', 6],
    ['autumn', 1],
    ['winter', 1],
    ['spring', 2],
  ]);

  var optionsOne = {
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

  var chartOne = new google.visualization.PieChart(document.getElementById('topLeft'));

  chartOne.draw(dataOne, optionsOne);

}

// coloumn chart for favourite web browser
  function chartTwo() {
    var dataTwo = google.visualization.arrayToDataTable([
      ["Preffered Web Browser", "Number Of People In The Class", { role: "style" }],
      ["Safari", 1, "#83CFC7"],
      ["Chrome", 7, "#3C6361"],
      ["Internet Explorer", 0, "#A3A126"],
      ["Fire Fox", 2, "#DAE05C"]
    ]);

    var view = new google.visualization.DataView(dataTwo);
    view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

    var optionsTwo = {
      bar: {groupWidth: "80"},
      legend: { position: "none" },
      backgroundColor: {
        fill: 'transparent'
      },
      annotations: {
        textStyle: {
          fontName: 'helvetica',
          fontSize: 18
        }
      },
      hAxis: {
        textStyle: {
          color: '#FDFFDB',
          fontSize: 20,
          fontName: 'helvetica'
        }
      },
      vAxis: {
        textStyle: {
          color: '#FDFFDB',
          fontSize: 20,
          fontName: 'helvetica'
        }
      }
    };

  var chartTwo = new google.visualization.ColumnChart(document.getElementById("topRight"));

  chartTwo.draw(view, optionsTwo);

}

// area chart for favoiurite takeaways
  function chartThree() {
    var dataThree = google.visualization.arrayToDataTable([
      ['Choise Of Takeaways', 'Number Of People In Class'],
      ['Indian', 2],
      ['Burgers', 3],
      ['Asian', 2],
      ['Pizza', 3]
      
    ]);

    var optionsThree = {
      backgroundColor: {
        fill: 'transparent'
      },
      annotations: {
        boxStyle: {
          stroke: '#fff',
          strokeWidth: '2'
        }
      }, 
       hAxis: {
        textStyle: {
          color: '#FDFFDB',
          fontSize: 20,
          fontName: 'helvetica'
        }
      },
      vAxis: {
        minValue: 0,
        maxValue: 3.5,
        textStyle: {
          color: '#FDFFDB',
          fontSize: 20,
          fontName: 'helvetica'
        }
      },
      legend: { position: "none" },
      colors: ['#A3A126'],
      lineWidth: 5
    };

    var chartThree = new google.visualization.AreaChart(document.getElementById('bottomLeft'));
    
    chartThree.draw(dataThree, optionsThree);
      
}

// --------------------

    function chartFour() {
      var data = google.visualization.arrayToDataTable([
        ["How I Get To Yoobee", "Number Of People In Class", { role: "style" } ],
        ["Automobile", 1, "#83CFC7"],
        ["Public Transportation", 7, "#3C6361"],
        ["On Foot", 1, "#A3A126"],
        ["Cycle", 1, "#DAE05C"]
      ]);

      var viewFour = new google.visualization.DataView(data);
      viewFour.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var optionsFour = {
        vAxis: {
          textStyle: {
            color: '#FDFFDB',
            fontSize: 20,
            fontName: 'helvetica'
          }
        },
        hAxis: {
          textStyle: {
            color: '#FDFFDB',
            fontSize: 20,
            fontName: 'helvetica'
          }
        },
        backgroundColor: {
          fill: 'transparent'
        },
        bar: {groupWidth: "35%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("bottomRight"));
      chart.draw(viewFour, optionsFour);
  }


