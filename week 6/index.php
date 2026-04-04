<?php
require 'koneksi.php';

$message = "";
$msg_type = "";

if (isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    if (empty($name) || empty($email)) {
        $message = "Please fill out all fields.";
        $msg_type = "error";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = "Invalid email address.";
        $msg_type = "error";
    } else {
        $check_query = "SELECT * FROM users WHERE name='$name' OR email='$email'";
        $check_result = mysqli_query($conn, $check_query);
        if (mysqli_num_rows($check_result) > 0) {
            $message = "This email or username is already registered. Please try another.";
            $msg_type = "error";
        } else {
            $insert_query = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
            if (mysqli_query($conn, $insert_query)) {
                $message = "User has been successfully inserted.";
                $msg_type = "success";
            } else {
                $message = "Failed to insert data.";
                $msg_type = "error";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Create Data</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h2>Create Data</h2>

        <form action="" method="POST">
            <div class="form-group">
                <label>Name:</label>
                <input type="text" name="name" placeholder="Your name" required>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" name="email" placeholder="Your email" required>
            </div>

            <?php if ($message != ""): ?>
                <div class="alert alert-<?php echo $msg_type; ?>">
                    <?php echo $message; ?>
                </div>
            <?php endif; ?>

            <button type="submit" name="submit" class="btn-submit">Insert</button>
        </form>

        <div class="bottom-menu">
            <a href="index.php">CREATE</a>
            <a href="read.php">READ</a>
        </div>
    </div>
</body>

</html>