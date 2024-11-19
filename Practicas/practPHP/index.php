<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular Salarios de Trabajadores</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Calcular Salarios de Trabajadores</h1>
        <form method="POST" action="procesar.php">
            <div class="form-group">
                <label for="pago_por_hora">Pago por hora:</label>
                <input type="number" name="pago_por_hora" id="pago_por_hora" required>
            </div>
            <div class="form-group">
                <label for="horas_trabajadas">Horas trabajadas:</label>
                <input type="number" name="horas_trabajadas" id="horas_trabajadas" required>
            </div>
            <div class="form-group">
                <button type="submit">Calcular</button>
            </div>
        </form>

        <?php 
        // Mostrar mensaje de resultado si lo hay
        if (isset($_GET['resultado'])) {
            echo '<div class="result">' . htmlspecialchars($_GET['resultado']) . '</div>';
        }
        ?>
    </div>
</body>
</html>
