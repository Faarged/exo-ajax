<?php
  require_once 'php/connex.php';
 ?>
<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>essai d'ajax</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>

    <h1>Essai ajax n°3792</h1>


    <form class="" id="fatigue" action="php/insert.php" method="POST">
      <div class="form-group">
        <label for="nom">Mets ton nom ici:</label>
        <input type="text" class="form-control" name="nom" id="nom">
      </div>

      <button type="submit" name="submit" id="okay">Okay !</button>
    </form>


    <div id="resultat"></div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/index.js"></script>
  </body>
</html>
