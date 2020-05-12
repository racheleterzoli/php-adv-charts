
function printLineChartDemo(){
  $.ajax({
    url:"server.php",
    method:"GET",
    success: function (fullData){

      console.log(fullData);

      var labels = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio','agosto','settembre','ottobre','novembre','dicembre'];
      var data = fullData;

      var ctx= $("#line");

      var myChart = new Chart(ctx,{
      type: 'line',
       data: {
           labels: labels,
           datasets: [{
               label: 'Vendite',
               data: data,
               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
                   'rgba(153, 102, 255, 0.2)',
                   'rgba(255, 159, 64, 0.2)'
               ],
               borderColor: [
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                   'rgba(153, 102, 255, 1)',
                   'rgba(255, 159, 64, 1)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero: true
                   }
               }]
           }
       }
    });
    }

  });
}
function printPieChartDemo(){
  $.ajax({
    url:"serveruno.php",
    method:"GET",
    success: function (fullData){

      var labels = ['Marco', 'Giuseppe', 'Mattia', 'Alberto'];
      var data = fullData;

      var ctx= $("#pie");

      var myChart = new Chart(ctx,{
      type: 'pie',
       data: {
           labels: labels,
           datasets: [{
               label: 'Fatturato dagli agenti',
               data: data,
               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
                   'rgba(153, 102, 255, 0.2)',
                   'rgba(255, 159, 64, 0.2)'
               ],
               borderColor: [
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                   'rgba(153, 102, 255, 1)',
                   'rgba(255, 159, 64, 1)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero: true
                   }
               }]
           }
       }
    });
    }

  });
}

function init(){
   printLineChartDemo();
   printPieChartDemo();
};

$(document).ready(init);
