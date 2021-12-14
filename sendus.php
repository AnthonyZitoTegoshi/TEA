<?php

// Inclusão das classes necessárias
include_once "./classes/DBConnection.php";

// Seta as configurações da conexão ao BD
$host = "localhost";
$user = "talentos_tea_user";
$password = "ifsp@2021";
$database = "talentos_tea";

// Coleta os inputs do form de contato
$userName = $_REQUEST["username"] ? $_REQUEST["username"] : null;
$userContact = $_REQUEST["usercontact"] ? $_REQUEST["usercontact"] : null;
$userMessage = $_REQUEST["usermessage"] ? $_REQUEST["usermessage"] : null;

// Cria uma nova conexão para futuro uso
$dbConnection = new DBConnection($host, $user, $password, $database);

echo $dbConnection->getHost();
$dbConnection->close();
echo $dbConnection->getHost();

// Insere os dados enviados pelo form na tabela de sendus
//$dbConnection->insert("sendus", $userName, $userContact, $userMessage);

?>