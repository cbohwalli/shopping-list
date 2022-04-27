<?php
include_once "mySQL.php";

$vara = $_POST['vara'];
$sql = "DELETE FROM handling WHERE ID='".$vara."' ";
mysqli_query($conn, $sql);
$conn->close();
?>