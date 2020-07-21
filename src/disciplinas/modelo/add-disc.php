<?php

    //Conmectar func ao bd
    include('../../conection/conn.php');

    $Nome = $_REQUEST['Nome'];
    $Professor = $_REQUEST['Professor'];
    $Nota = $_REQUEST['Nota'];

    //Verificando os campos preenchidos
    if(strlen($Nome)==0 || strlen($Professor)==0 || strlen($Nota)==0){
        echo "Existem campos em branco, tente novamente por favor!";
    }else{
        //var para receber comands sql
        $sql = "INSERT INTO diciplinas (Nome, Professor, Nota) VALUE ('".$Nome."', '".$Professor."', '".$Nota."')";
        //testar a linha sql diretamente no bd
        if(mysqli_query($conecta, $sql)){
            echo "A disciplina ".$Nome." foi salva com sucesso!";
        }else{
            echo "Deu merda pai".mysqli_error($conecta);
        }
    }