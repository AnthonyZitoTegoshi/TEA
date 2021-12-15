<?php

ini_set("default_charset", "UTF-8");

class DBConnection {

    private $host;
    private $user;
    private $password;
    private $database;
    private $connection;

    function __construct($host, $user, $password, $database) {
        $this->setHost($host);
        $this->setUser($user);
        $this->setPassword($password);
        $this->setDatabase($database);
        $this->setConnection(
            new mysqli(
                $this->getHost(),
                $this->getUser(),
                $this->getPassword(),
                $this->getDatabase()
            )
        );
    }

    public function insert() {
        $args = func_get_args();
        
        $query = "insert into " . $args[0];

        array_shift($args);
        $fields = Array();
        $values = Array();
        for ($i = 0; $i < count($args); $i++) {
            if ($i % 2 == 0) {
                array_push($fields, $args[$i]);
            } else {
                array_push($values, $args[$i]);
            }
        }

        $valuesToString = "";
        for ($i = 0; $i < count($values); $i++) {
            if (gettype($values[$i]) == "string") {
                $valuesToString .= (($valuesToString != "") ? "," : "") . "'" . $values[$i] . "'";
            } else {
                $valuesToString .= (($valuesToString != "") ? "," : "") . $values[$i];
            }
        }

        $query .= " (" . implode(",", $fields) . ") values (" . $valuesToString . ")";

        return $this->getConnection()->query($query);
    }

    public function close() {
        $this->getConnection()->close();
    }
    
    public function getHost() {
        return $this->host;
    }

    public function setHost($host) {
        $this->host = $host;
    }

    public function getUser() {
        return $this->user;
    }

    public function setUser($user) {
        $this->user = $user;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setPassword($password) {
        $this->password = $password;
    }

    public function getDatabase() {
        return $this->database;
    }

    public function setDatabase($database) {
        $this->database = $database;
    }

    public function getConnection() {
        return $this->connection;
    }

    public function setConnection($connection) {
        if ($connection->connect_error) {
            echo $connection->connect_error;
        } else {
            $this->connection = $connection;
        }
    }

}

?>