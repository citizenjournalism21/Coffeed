function go(data1) {
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        // var data = google.visualization.arrayToDataTable([
        //   ['Task', 'Hours per Day'],
        //   ['Eat',      10],
        //   ['Commute',  5],
        //   ['Watch TV', 2],
        //   ['Sleep',    7],
        //   ['Work',     7]
          
        // ]);
        var data = google.visualization.arrayToDataTable(data1);
        var options = {
          // title: 'My Daily Activities', titleTextStyle: {'color':'white'},
          // pieHole: 0.4,
          backgroundColor: { fill:'transparent' },
          legendTextStyle: { 'color': 'white' },
          focusTarget:"series",
          height:300
          // showColorCode: false;
        };

        var chart = new google.visualization.PieChart(document.getElementById('chartContainer'));
        chart.draw(data, options);
      }
    }

$(document).ready(function(){
    // $("#clickme").click(function(){
    //     $.ajax({                                            
    //         // url: 'http://127.0.0.1:8000/get_data',                                                         
    //         // dataType: 'json',
    //         success: function(data)          
    //         {
    //             go(data);
    //         }    
    //     });
    // }); 
    var data = [['Task', 'Hours per Day'],['Eat', 10],['Commute',  5],['Watch TV', 2]];
    go(data);
})