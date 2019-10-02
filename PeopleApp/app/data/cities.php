<?php
$host='localhost';
$db = 'people';
$username = 'postgres';
$password = 'postgres';
$dsn = "pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password";

header ("Content-Type: text/html; charset=utf-8");
try{
 $conn = new PDO($dsn);
 $id = $_GET["person_id"];
 if($conn){
  if($id){
	$stmt = $conn->query("select distinct city from cities where person_id=$id");
  }else{
	$stmt = $conn->query("select distinct city from cities");
  }	
 $stmt->execute();
 
 //$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
 $results["cities"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
 $results["success"] = true;
 
 $json = json_encode($results);
 echo $json;
 }
}catch (PDOException $e){
 // report error message
 echo $e->getMessage();
}
?>