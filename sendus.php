<?php

include_once "./classes/DBConnection.php";

$userName = $_REQUEST["username"] ? $_REQUEST["username"] : null;
$userContact = $_REQUEST["usercontact"] ? $_REQUEST["usercontact"] : null;
$userMessage = $_REQUEST["usermessage"] ? $_REQUEST["usermessage"] : null;

echo $userName . " e " . $userContact . " e " . $userMessage;

$dbConnection = new DBConnection();

?>