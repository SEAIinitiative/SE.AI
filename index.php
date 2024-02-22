<?php
// Set your password
$password = '123456789';

session_start();

// Check if the password is submitted and correct
if (isset($_POST['password']) && ($_POST['password'] == $password)) {
    $_SESSION['password'] = $_POST['password'];
} elseif (!isset($_SESSION['password']) || ($_SESSION['password'] != $password)) {
    // The password isn't set or incorrect, show the login form
    die('
        <form method="post">
            Enter Password: <input type="password" name="password">
            <input type="submit" value="Login">
        </form>
    ');
}

// Your protected content goes here
echo '<h1>Welcome Aboard!</h1> index.html';
?>
