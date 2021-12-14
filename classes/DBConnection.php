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

}

?>