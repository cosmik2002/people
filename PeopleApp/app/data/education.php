<?php
include 'config.php';

header ("Content-Type: text/html; charset=utf-8");
try{
 $conn = new PDO($dsn);
 $id = $_GET["id"];
 if($conn){
  if($id){
	$stmt = $conn->query("select * from education where id=$id");
  }else{
	$stmt = $conn->query("select * from education");
  }	
 $stmt->execute();
 
 $results["education"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
 $results["success"] = true;
 
 $json = json_encode($results);
 echo $json;
 }
}catch (PDOException $e){
 // report error message
 echo $e->getMessage();
}
?>