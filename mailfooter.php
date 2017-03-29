<?php

include("wcode_mailer/wcode_mailer.php");

  if(isset($_POST['email']) && isset($_POST['nombre'])){
    wcode_mail($_POST['email'], $_POST['nombre'], "esteban@velosoft.mx", "Contacto WEB");
  }

?>
