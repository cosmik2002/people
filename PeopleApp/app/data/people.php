<?php
$host='localhost';
$db = 'people';
$username = 'postgres';
$password = 'postgres';
$dsn = "pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password";

header ("Content-Type: text/html; charset=utf-8");
try{
 $conn = new PDO($dsn);
 $id = $_GET["id"];
 if($conn){
 if($id){
	$stmt = $conn->query("select p.id,p.name,ed.education,string_agg(c.city,',') cities, p.education_id from people p join education ed on ed.id = p.education_id left join cities c on c.person_id = p.id group by 1,2,3,5 where id=$id");
 }else{
	$stmt = $conn->query("select p.id,p.name,ed.education,string_agg(c.city,',') cities, p.education_id from people p join education ed on ed.id = p.education_id left join cities c on c.person_id = p.id group by 1,2,3,5");
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