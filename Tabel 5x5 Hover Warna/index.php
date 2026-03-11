<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabel 5x5 Hover Warna</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <table>
        <?php
        for ($i = 1; $i <= 5; $i++) {
            echo "<tr class='baris-$i'>";
            for ($j = 1; $j <= 5; $j++) {
                echo "<td>$i,$j</td>";
            }
            echo "</tr>";
        }
        ?>
    </table>

</body>

</html>