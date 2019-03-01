// google chart packages
google.charts.load('current', {'packages':['corechart']});
    
// callback Charts
google.charts.setOnLoadCallback(chartOne);
google.charts.setOnLoadCallback(chartTwo);
google.charts.setOnLoadCallback(chartThree);
google.charts.setOnLoadCallback(chartFour);

// pie chart for seasons
function chartOne() {

    $.ajax({
      url: "js/data.json",
      dataType: "json",
      type: "GET",
      success:function(dataSeason){

      var dataOne = new google.visualization.DataTable();
      dataOne.addColumn('string','season');
      dataOne.addColumn('number','percentage');
      for (var i = 0; i < dataSeason.length; i++) {
          dataOne.addRow([
                dataSeason[i].season,
                dataSeason[i].percentage
                ]);
          }   

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

},
error:function(error){
    console.log("ERROR");
    console.log(error);
}

  });//ajax
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

  $.ajax({
    url: "js/dataTakeaway.json",
    dataType: "json",
    type: "GET",
    success:function(dataTakeaway){

    var dataThree = new google.visualization.DataTable();
    dataThree.addColumn('string','takeaway');
    dataThree.addColumn('number','people');
    for (var i = 0; i < dataTakeaway.length; i++) {
        dataThree.addRow([
              dataTakeaway[i].takeaway,
              dataTakeaway[i].people
              ]);
        }   

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

},
error:function(error){
  console.log("ERROR");
  console.log(error);
}

});//ajax
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




