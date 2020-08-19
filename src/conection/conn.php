<?php
//conn conection

//demonstre todos os erros e alertas quanto ao meu codigo e interacao com o banco de dados

    ini_set('display_errors', true);
    error_reporting(E_ALL);

    //variaveis para o bd
    $hostname = "localhost";
    $database = "minhasnotas";
    $username = "root";
    $password = "";

    if($conecta = mysqli_connect($hostname, $username, $password, $database)){
        //ECHO "Conexão com o banco de dados ".$database. "Efetuado com sucesso!";
    } else{
        echo "Erros: ".mysqli_connect_error();
    }