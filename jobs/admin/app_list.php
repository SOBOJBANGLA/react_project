<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
   // echo "Testing";
?>

<?php
include("connection.php");

$user = json_decode(file_get_contents('php://input'));
//print_r($user)
$fname = $user->fname;
$lname = $user->lname;
$gender = $user->gender;
$b_date= $user->b_date;
$education= $user->education;
$email= $user->email;
$contact= $user->contact;
$experience= $user->experience;
$skills= $user->skills;
$address= $user->address;
$about= $user->about;
$photo=$user->photo;

            $conn->query("INSERT INTO applicant (fname,lname,gender,birth,education,email,contact,experience,skill,address,about,photo) VALUES('$fname','$lname','$gender','$b_date','$education','$email','$contact','$experience','$skills','$address','$about','$photo')");

            if($conn->affected_rows)echo "Inserted";

?>