<?php
include 'config.php';
header ("Content-Type: text/html; charset=utf-8");
try{
 $conn = new PDO($dsn);
 $id = $_POST["id"];
 $name = $_POST["name"];
 if($conn){
  $stmt = $conn->query("delete from people where id=$id");
  $stmt->execute();
 
  $results["success"] = true;
  $results["message"] = "Удалили $name";
  $json = json_encode($results);
  echo $json;
 }
}catch (PDOException $e){
 // report error message
 echo $e->getMessage();
}
?>