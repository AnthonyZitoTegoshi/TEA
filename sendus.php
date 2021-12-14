<?php

echo "Olá, mundo!";

include_once "DBConnection.php";

echo "Olá, mundo!";

$dbConnection = new DBConnection();

echo $dbConnection->teste;

?>