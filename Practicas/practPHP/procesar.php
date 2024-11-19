<?php
// Función para contar trabajadores con salario mayor o igual a 3500
function contarTrabajadoresConSalarioMayorOIgualA3500($trabajadores) {
    $contador = 0;
    foreach ($trabajadores as $trabajador) {
        $salario = $trabajador['pago_por_hora'] * $trabajador['horas_trabajadas'];
        if ($salario >= 3500) {
            $contador++;
        }
    }
    return $contador;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $pagoPorHora = $_POST['pago_por_hora'];
    $horasTrabajadas = $_POST['horas_trabajadas'];

    // Crear un arreglo con un solo trabajador
    $trabajadores = [
        ['pago_por_hora' => $pagoPorHora, 'horas_trabajadas' => $horasTrabajadas]
    ];

    // Contar los trabajadores con salario mayor o igual a 3500
    $resultado = contarTrabajadoresConSalarioMayorOIgualA3500($trabajadores);

    // Redirigir a index.php con el resultado
    header("Location: index.php?resultado=Número de trabajadores con salario mayor o igual a 3500: " . $resultado);
    exit(); // Asegurarse de que no se ejecute más código
}
?>
