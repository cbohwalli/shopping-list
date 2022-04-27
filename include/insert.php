<?php
  include_once 'mySQL.php';

  $new_item = $_POST['newItem'];
  $sql = "INSERT INTO handling(varor) VALUES('$new_item');";
  mysqli_query($conn, $sql);
  $conn->close();
 ?>
