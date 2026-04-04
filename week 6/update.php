<?php
require 'koneksi.php';

$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = '$id'";
$result = mysqli_query($conn, $query);
$data = mysqli_fetch_assoc($result);

$message = "";

if (isset($_POST['update'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    $update_query = "UPDATE users SET name='$name', email='$email' WHERE id='$id'";
    if (mysqli_query($conn, $update_query)) {
        header("Location: read.php");
        exit;
    } else {
        $message = "Failed to update data.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Update Data</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h2>Update User</h2>

        <form action="" method="POST">
            <div class="form-group">
                <label>Name:</label>
                <input type="text" name="name" value="<?php echo $data['name']; ?>" required>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" name="email" value="<?php echo $data['email']; ?>" required>
            </div>

            <?php if ($message != ""): ?>
                <div class="alert alert-error"><?php echo $message; ?></div>
            <?php endif; ?>

            <button type="submit" name="update" class="btn-submit">Update</button>
        </form>

        <div class="bottom-menu">
            <a href="index.php">CREATE</a>
            <a href="read.php">READ</a>
        </div>
    </div>
</body>

</html>