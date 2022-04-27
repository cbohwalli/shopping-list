<?php

$items_client_string = file_get_contents('php://input');

while(true) {

  $items_database_object = get_item_data();
  $items_database_string = json_encode($items_database_object);
  
  if($items_client_string != $items_database_string) {

    if(count($items_database_object) != 0) {
      generate_database_items();
    }

    break;
  }

  sleep(0.7);
}

class Item_data
{
  public $id;
  public $check;
}

function get_item_data() {

  include "mySQL.php";
  $sql = "SELECT * FROM handling;";
  $reslut = mysqli_query($conn, $sql);

  $database_items = array();

  while($row = mysqli_fetch_assoc($reslut)) {

    $item = new Item_data();
    $item->id = $row['ID'];
    $item->check = $row['checked'];
    array_push($database_items, $item);
  }

  $conn->close();

  return $database_items;
}

function generate_database_items() {

  include "mySQL.php";
  $sql = "SELECT * FROM handling;";
  $reslut = mysqli_query($conn, $sql);

  while($row = mysqli_fetch_assoc($reslut)) {

    $id = $row['ID'];
    $vara = $row['Varor'];

    echo '<label id="item:' .$id . '" class="itemContainer">' . $vara . ' ';

    if($row['checked'] == 1) {
      echo '<input type="checkbox" class="checkbox" id="checkbox:' .$id. '" checked="checked">';
    } else {
      echo '<input type="checkbox" class="checkbox" id="checkbox:' .$id . '">';
    }

    echo '<span class="checkmark">' . '</span>';
    echo '<button class="redButton removeButton" type="button" id="removeButton:' .$id . '">' . 'Ta bort' . '</button>';
    echo '</label>';
  }

  $conn->close();      
}
?>