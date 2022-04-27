<?php
include_once "mySQL.php";

$checked = $_POST['checked'];
$id = $_POST['id'];

if($checked == 1) {
  $sql = "UPDATE handling
          SET checked = 1
          WHERE ID='$id' ";

  mysqli_query($conn, $sql);
} else {
  $sql = "UPDATE handling
          SET checked = null
          WHERE ID='$id' ";

  mysqli_query($conn, $sql);
  $conn->close();
}
?>