<?php

// Inclusão das classes necessárias
include_once "./classes/DBConnection.php";

// Seta as configurações da conexão ao BD
$host = "localhost";
$user = "talentos_tea_user";
$password = "ifsp@2021";
$database = "talentos_tea";

// Coleta os inputs do form de contato
$userName = isset($_POST["username"]) ? $_POST["username"] : null;
$userContact = isset($_POST["usercontact"]) ? $_POST["usercontact"] : null;
$userMessage = isset($_POST["usermessage"]) ? $_POST["usermessage"] : null;

// Cria uma nova conexão para futuro uso
$dbConnection = new DBConnection($host, $user, $password, $database);

// Insere os dados enviados pelo form na tabela de sendus
$response = $dbConnection->insert("sendus", "id", 0, "username", $userName, "usercontact", $userContact, "usermessage", $userMessage);

// Volta para a página all-in-one enviando o resultado da query pela session
session_start();
echo $_SESSION["queryStatus"] = $response;
//header("Location: ./index.php");

?>