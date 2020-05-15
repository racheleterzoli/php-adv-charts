<?php
ini_set( 'display_errors', '1' );
include 'database.php';

$level = $_GET['level'];
if ($level =="guest") {
  $array[0]=graficouno($graphs);
}
if($level=="employee"){
  $array[0]=graficouno($graphs);
  $array[1]=graficodue($graphs);
  // grafico uno e due
}
if ($level=="clevel") {
  $array[0]=graficouno($graphs);
  $array[1]=graficodue($graphs);
  $array[2]=graficotre($graphs);
  // grafico uno due tre
}

function graficouno($graphs){
  return json_encode($graphs['fatturato']);
}
function graficodue($graphs){
  $fba['type']= $graphs['fatturato_by_agent']['type'];
  $labels=[];
  $data=[];
  foreach ($graphs['fatturato_by_agent']['data'] as $name => $value) {

    $labels[] = $name;
    $data[] = $value;
  }
  $fba['labels'] = $labels;
  $fba['data'] = $data;
  return json_encode($fba);
}
function graficotre($graphs){
  $te['type']=$graphs['team_efficiency']['type'];
  $labels=[];
  $data=[];
  foreach ($graphs['team_efficiency']['data'] as $name => $value){
    $te['labels'] = $name;
    $te['data'] = $value;

  }
  return json_encode($te);
}
?>
