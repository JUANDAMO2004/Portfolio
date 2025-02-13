<?php
if($_SERVER["REQUEST_METHOD"] = "POST"){
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    if(empty($name) || empty($email) || empty($message)) {
         echo "Please fill in all the fields";
         exit;
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
        echo "Invalid Email format";
        exit;
    }

    $to = "juandamo35@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset = UTF-8";

    $body = "Name: $name \nEmail: $email\n\nMessage:\n$message";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if(mail($to,$subject, $body, $headers)){
        echo "Success";
    }else{
        echo "Error sending message";
    }

} else{
    echo "Invalid Request";
}
?>