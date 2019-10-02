<?php
include 'config.php';
header ("Content-Type: text/html; charset=utf-8");
try{
 $conn = new PDO($dsn);
 $name = $_POST["name"];
 $education_id = $_POST["education_id"];
 if($conn){
  $stmt = $conn->query("insert into people (name,education_id) values('$name',$education_id)");
  //$stmt->execute();
 
  error_log("insert person $name");
 
 $results["success"] = true;
 $results["message"] = "Добавили $name";
  $json = json_encode($results);
  echo $json;
 }
}catch (PDOException $e){
 // report error message
 echo $e->getMessage();
}
?>