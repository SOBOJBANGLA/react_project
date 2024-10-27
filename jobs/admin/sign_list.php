<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
   // echo "Testing";
?>

<?php
include("connection.php");

$user = json_decode(file_get_contents('php://input'));
//print_r($user)
$name = $user->fname;
$email = $user->email;
$password = $user->password;



            $conn->query("INSERT INTO user1(fname,email,password)VALUES('$name','$email','$password') ");

            if($conn->affected_rows)echo "Inserted";

?>