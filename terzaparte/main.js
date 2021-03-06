

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
        data:['level'='guest']
        success: function(data) {
        printLineChart(data);
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
