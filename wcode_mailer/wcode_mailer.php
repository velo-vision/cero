<?php

/*
	This Plugin require Boostrap in page
*/

require 'PHPMailerAutoload.php';


function wcode_mail($quien, $nombreQuien, $recibe, $nombreRecibe){
	if( isset($_POST) && count($_POST) ){

		$mail = new PHPMailer;

		$mail->setFrom($quien, $nombreQuien);

		$mail->addAddress($recibe, $nombreRecibe);

		$mail->Subject = 'Ing. Cuevas';

		$mail->IsHTML(true);

		$contenido = "";

		foreach ($_POST as $key => $value)	$contenido .= ucfirst($key).": ".$value." <br>";

		$mail->Body = $contenido;

		if (!$mail->send()) {
			echo '
				<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
					<div class="modal-dialog modal-sm">
					  <div class="modal-content">

						<div class="modal-header">
						  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <h4 class="modal-title" id="mySmallModalLabel">Contacto</h4>
						</div>
						<div class="modal-body">
						  Error al enviar el mensaje.
						</div>
					  </div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				  </div><!-- /.modal -->
				<script>
					/*$(document).ready(function(){
						$(".modal").modal("show");
					});*/
				</script>
			';
			return false;
		} else {
			echo '
				<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
					<div class="modal-dialog modal-sm">
					  <div class="modal-content">

						<div class="modal-header">
						  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <h4 class="modal-title" id="mySmallModalLabel">Contacto</h4>
						</div>
						<div class="modal-body">
						  Mensaje enviado correctamente.
						</div>
					  </div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				  </div><!-- /.modal -->
				<script>
					/*$(document).ready(function(){
						$(".modal").modal("show");
					});*/
				</script>
			';
			return true;

		}
	}
}



?>
