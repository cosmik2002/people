<?php
$host='localhost';
$db = 'people';
$username = 'postgres';
$password = 'postgres';
$dsn = "pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password";

header ("Content-Type: text/html; charset=utf-8");
try{
 $conn = new PDO($dsn);
 $id = $_POST["id"];
 $education_id = $_POST["education_id"];
 if($conn){
 if($id){
	$stmt = $conn->query("update people set education_id = $education_id where id=$id");
 }	
 $stmt->execute();
 
 //$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
 $results["people"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
 $results["success"] = true;
 
 $json = json_encode($results);
 echo $json;
 }
}catch (PDOException $e){
 // report error message
 echo $e->getMessage();
}
?>