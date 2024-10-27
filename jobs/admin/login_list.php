<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
   // echo "Testing";
?>

<?php
include("connection.php");

$user = json_decode(file_get_contents('php://input'));
//print_r($user)

$email = $user->email;
$password = $user->password;



            $sq=$conn->query("SELECT * FROM user1 email='$email' And password = '$password'  ");

            if(mysqli_num_rows($query) > 0)echo "Inserted";

?>