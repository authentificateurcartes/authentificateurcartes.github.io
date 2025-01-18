<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;




//Create an instance; passing `true` enables exceptions

function EnvoieMail($mail, $mailToSend, $messageBod, $code)
{

    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'authentificatorgiftcards@gmail.com';                     //SMTP username
    $mail->Password   = 'rjgzkumsuxdmriyh'; //https://myaccount.google.com/u/1/apppasswords?pli=1&rapt=AEjHL4O6JomJmLgUF8yTDFNAs-MpSu31UobOEFcv7-5l8lqEtmugBVAcQ0Kkag3POwloN6QwTxqvqgoR2ikevdl0D8SUP1DzFKk5rL0r7srqkAAx-Fef8KA //SMTP password

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('authentificatorgiftcards@gmail.com', 'Abonnez-vous au Code Redempteur');
    $mail->addAddress('gwengenievre@gmail.com', 'User');    // Ajouter un destinataire
    $mail->addReplyTo('noreply@domaine.com', 'No Reply');



    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Gifts Cards authentificator';
    $mail->Body    = $messageBod ;
    $mail->AltBody = 'Abonnez-vous au Code Redempteur';

    $mail->send();
}

