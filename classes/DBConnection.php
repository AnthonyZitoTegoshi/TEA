<?php

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
        // Pega os argumentos por serem de tamanho indefinido
        $args = func_get_args();
        
        // Começa a escrever a query com a tabela a ser mudada
        $query = "insert into " . $args[0] . " values (0, '";

        // Pega todos os outros argumentos e junta na formatação específica
        array_shift($args);
        $args = implode("', '", $args);

        // Termina de formular a query com os dados a serem inseridos
        $query .= $args . "')";

        // Efetura a query
        $this->getConnection()->query($query);
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