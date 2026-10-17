<?php


$to = 'teamvimalakar@gmail.com';
if (isset($_POST['submit_contact'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $sub = "New Contact Details";
    $ph = $_POST['mobile'];
    $msg = $_POST['msg'];
    $datime = isset($_POST['dt-local']) ? $_POST['dt-local'] : 'Not provided';
    $Customer = "Contact Person Name: $name \n Mobile: $ph \n E-Mail: $email \n Date of Appointment: $datime \n Subject: $sub \n Message: $msg";
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    if (mail($to, $sub, $Customer, $headers)) {
        $body = "We have received your Contact Details.\r\n" . $Customer;
        $subject = "teamvimalakar@gmail.com";
        $headers = 'From: ' . $to . "\r\n" .
            'Reply-To: ' . $to . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        mail($email, $subject, $body, $headers);
        echo '<script>alert("Thank You, Your Message Successfully Received, We will get back you soon.");window.location="contact.html";</script>';
    } else {
        echo '<script>alert("Error, We will check and get back you soon.");window.location="contact.html";</script>';
    }
}
else if (isset($_POST['subscribe'])) {
    $email = $_POST['email'];
    $sub = "New Subscription Request";
    $Customer = "New Subscription Request from \n E-Mail: $email";
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    if (mail($to, $sub, $Customer, $headers)) {
        $body = "We have received your Contact Details.\r\n" . $Customer;
        $subject = "teamvimalakar@gmail.com";
        $headers = 'From: ' . $to . "\r\n" .
            'Reply-To: ' . $to . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        mail($email, $subject, $body, $headers);
        echo '<script>alert("Thank You, Your E-Mail ID Added to our list, you will get notifications..");window.location="index.html";</script>';
    } else {
        echo '<script>alert("Error, We will check and get back you soon..");window.location="index.html";</script>';
    }
}

else if (isset($_POST['appointment'])) {
    $name = $_POST['name'];
    $mail = $_POST['email'];
    $mob = $_POST['phone'];
    //$ser = $_POST['services'];
    $datime = $_POST['dt-local'];
    $msg = $_POST['message'];
    $sub = "New Patient Appointment Request";
    $customer = "Appointment Request Person Name: $name \n E-Mail: $mail \n Mobile: $mob \n  Message: $msg \n date: $datime \n";
    $headers = 'From: ' . $mail . "\r\n" .
        'Reply-To: ' . $mail . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $to = 'teamvimalakar@gmail.com';
    if (mail($to, $sub, $customer, $headers)) {
        $body = "We have received your contact Details as follows. \n $customer";
        $subject = "Dr Vimalakar Reddy";
        $headers = 'From: ' . $to . "\r\n" .
            'Reply-To: ' . $to . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        mail($mail, $subject, $body, $headers);
        echo '<script>alert("Thank You, Your Mail Has Successfully Received. We will get back you soon..");window.location="index.html";</script>';
    } else {
        echo '<script>alert("Error, We will check and get back you soon..");window.location="index.html";</script>';
    }

}



  ?>