<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
        <title></title>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min.js"></script>
        <script src="https://momentjs.com/downloads/moment-with-locales.min.js"></script>
    <script src="main.js"></script>

  </head>
  <body>
<div class="container">
  <div class="row">
    <div class="col">
      <h1>Line Chart-DEMO</h1>
      <canvas id="fatturato"></canvas>
      <canvas id="fatturato_by_agent"></canvas>
      <canvas id="team_efficiency"></canvas>

    </div>

  </div>

</div>
<script>
function printLineChart(data){
  var ctx = $('#fatturato');
  var months = getMonths();
  var mychart= new Chart(ctx, {
        type: data['type'],
        data: {
            labels: months,
            datasets: [{
                label: '# of Votes',
                data: data['data']
            }]
        }
  });
}
function printPieChart(data){
  var ctx = $('#fatturato_by_agent');
  var mychart = new Chart(ctx, {
    type: data['type'],
    data: {
        labels: data['labels'],
        datasets: [{
            label: '# of Votes',
            data: data['data']
        }]
    }
  })
};

function printCharts(){
  $.ajax({

        url: 'server.php',
        method: 'GET',
        data:{'level':'<?php echo $_GET['level']?>'},
        success: function(data) {
          // if (true) {
          //
          // }
          // printLineChart(data);
          console.log(data);
        }, error: function(err) {
          console.error(err);
        }
  });
  $.ajax({
    url:'serveruno.php',
    method:'GET',
    success:function(data){
      printPieChart(data);
    }, error :function(err){
      console.error(err);
    }
  })
}

function getMonths() {

    return moment.months();
}

function init() {
    moment.locale('it');
    printCharts();
}

$(document).ready(init);
</script>
  </body>
</html>
