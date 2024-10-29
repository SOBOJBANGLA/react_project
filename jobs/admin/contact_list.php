<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
   // echo "Testing";
?>

<?php
include("connection.php");

$user = json_decode(file_get_contents('php://input'));
//print_r($user)
$name = $user->name;
$email = $user->email;
$phone = $user->number;
$sub= $user->subject;
$msz= $user->message;

if($name!="" && $email!="" && $phone!="" && $sub!="" && $msz!="" ){
            $conn->query("INSERT INTO contact(name,email,number,subject,massage)VALUES('$name','$email','$phone','$sub','$msz') ");
}

            if($conn->affected_rows)echo "Your message has sent been successfully";

?>