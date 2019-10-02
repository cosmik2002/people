<?php
include 'config.php';
header ("Content-Type: text/html; charset=utf-8");
try{
 $conn = new PDO($dsn);
 $id = $_POST["id"];
 $education_id = $_POST["education_id"];
 if($conn){
 if($id){
	$stmt = $conn->query("update people set education_id = $education_id where id=$id");
	//$stmt->execute();
	$results["success"] = true;
 }else	
	$results["success"] = false;
 
 $json = json_encode($results);
 echo $json;
 }
}catch (PDOException $e){
 // report error message
 echo $e->getMessage();
}
?>