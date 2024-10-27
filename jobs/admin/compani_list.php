<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
   // echo "Testing";
?>

<?php
include("connection.php");



           $sql = "SELECT * FROM company";

          $result = $conn->query($sql);
        $dataset =[];

          while($row=$result->fetch_assoc()){
$dataset[] = $row;
          }

            echo json_encode($dataset);

?>