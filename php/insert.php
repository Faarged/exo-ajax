<?php
  if(isset($_POST['submit'])){
    require_once 'connex.php';
    $sql = 'INSERT INTO lessive(nom) VALUES(:nom)';
    $nom = isset($_POST['nom']) ? $_POST['nom'] : NULL;
    $add = $bdd->prepare($sql);
    $add->execute(array(
      'nom' => $nom,
    ));
    print_r(json_encode("Ajout fait proprement"));
  }
   ?>
