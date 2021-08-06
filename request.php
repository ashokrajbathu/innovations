<?php
session_start();
ob_start();
$to = "ravi@alieninnovations.in";
$web = "ALIEN INNOVATIONS";


    $subject = "Contact us From ".$_POST['name'];
	$email = $_POST['email'];
	$emailTo = "info@".$web;
    $message=  "Hello, <br />".
				"Name : ".$_POST['name']."&nbsp; <br /><br />".
		        "Email : ".$_POST['email']."<br /><br />".
		       	"TelePhone : ".$_POST['phone']."<br /><br />".
				"Message : ".$_POST['message']."&nbsp; <br /><br />".
                "Subject: ".$_POST['subject']."<br /><br />";
				
	header( "refresh:2;url=index.html" );
   $headers = 'From: ' . $web . ' <' . $emailTo . '>' . "\r\n" . 'Reply-To: ' . $email . "\r\n";
   $headers  .= 'MIME-Version: 1.0' . "\r\n";
   $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
   $headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
   $headers .= "X-Priority: 1 (Higuest)\n";
   $headers .= "X-MSMail-Priority: High\n";
   $headers .= "Importance: High\n";
   if (filter_var($email, FILTER_VALIDATE_EMAIL)) { mail($to,$subject,$message,$headers)or die('Error sending Mail');//This method sends the mail.
echo "Your email was sent!"; // success message
}else{
echo "Invalid Email, please provide an correct email.";
}


ob_flush();
?>

  
