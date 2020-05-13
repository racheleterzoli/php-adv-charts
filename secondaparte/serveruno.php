<?php
header('Content-Type: application/json');

include "database.php";
$fba['type']= $graphs['fatturato_by_agent']['type'];
$labels=[];
$data=[];
      foreach ($graphs['fatturato_by_agent']['data'] as $name => $value) {

        $labels[] = $name;
        $data[] = $value;
     }
     $fba['labels'] = $labels;
     $fba['data'] = $data;

     echo json_encode($fba);
      ?>
