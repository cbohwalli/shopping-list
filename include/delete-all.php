<?php
include_once "mySQL.php";
$sql = "DELETE FROM handling";
mysqli_query($conn, $sql);
$conn->close();
?>
