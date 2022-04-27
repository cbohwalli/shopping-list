<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shopping list</title>
  <link rel="stylesheet" href="style.css">
  <script type="module" src="javascript/main.js" defer></script>
</head>
<body>

  <div class="header borderDiv">
    <h1>Shopping list</h1>
  </div>

  <div class="mainDiv borderDiv" id="mainDiv">

    <div id="itemsDiv"></div>

    <form method="post" id="addingForm">
      <input type="text" name="itemName" class="inputField" id="inputField">
      <button class="addButton" id="addButton" type="submit" name="submit">Add</button>
      <button class="redButton" type="button" id="clearButton">Clear</button>
    </form>

  </div>
</body>
</html>