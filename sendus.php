<?php

include_once "./classes/DBConnection.php";

$userName = $_REQUEST["username"] ? $_REQUEST["username"] : null;
$userContact = $_REQUEST["usercontact"] ? $_REQUEST["usercontact"] : null;
$userMessage = $_REQUEST["usermessage"] ? $_REQUEST["usermessage"] : null;

$dbConnection = new DBConnection();

$dbConnection->setHost("host");
$dbConnection->setUser("user");
$dbConnection->setPassword("password");
$dbConnection->setDatabase("database");
$dbConnection->setConnection("connection");

echo $dbConnection->getHost("host");
echo $dbConnection->getUser("user");
echo $dbConnection->getPassword("password");
echo $dbConnection->getDatabase("database");
echo $dbConnection->getConnection("connection");

?>