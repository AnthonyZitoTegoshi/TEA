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

// Insere os dados enviados pelo form na tabela de sendus
$response = $dbConnection->insert("sendus", "i", 0, "username", $userName, "usercontact", $userContact, "usermessage", $userMessage);

// Volta para a página all-in-one enviando o resultado da query
$postdata = http_build_query(
    array(
        "response" => $response
    )
);

$opts = array("http" =>
    array(
        "method"  => "POST",
        "header"  => ["Location: ./index.php", "Content-type: application/x-www-form-urlencoded"],
        "content" => $postdata
    )
);

$context = stream_context_create($opts);

header("Location: ./index.php");

$result = file_get_contents("http://example.com/submit.php", false, $context);
?>