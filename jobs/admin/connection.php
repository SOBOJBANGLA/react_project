<?php
	$hostname = 'localhost:3310';
	$username = 'root';
	$password = '';
	$dbname = 'jobs_react';
	
	$conn = new mysqli($hostname, $username, $password, $dbname);
	
	if($conn->connect_error){
		die("Connection failed: " . $conn->connect_error);
	}
?>