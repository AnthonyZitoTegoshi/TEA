<?php

echo "Olá, mundo!";

include_once "./classes/DBConnection.php";

echo "Olá, mundo!";

$dbConnection = new DBConnection();

echo $dbConnection->teste;

?>