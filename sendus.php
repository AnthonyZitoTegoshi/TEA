<?php

echo "Olá, mundo!";

import_once("./classes/DBConnection.php");

$dbConnection = new DBConnection();

echo $dbConnection->teste;

?>