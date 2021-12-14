<?php

class DBConnection {

    private $host;
    private $user;
    private $password;
    private $database;
    private $connection;

    /*function __construct($host, $user, $password, $database) {

    }*/
    
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
        $this->connection = $connection;
    }

}

?>