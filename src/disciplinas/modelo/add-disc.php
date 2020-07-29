<?php

    //Conmectar func ao bd
    include('../../conection/conn.php');

    $Nome = $_REQUEST['Nome'];
    $Professor = $_REQUEST['Professor'];
    $Nota = $_REQUEST['Nota'];

    //Verificando os campos preenchidos
    if(strlen($Nome)==0 || strlen($Professor)==0 || strlen($Nota)==0){
        $dados = array(
            'tipo' == 'alert-warning',
            'mensagem' == 'Existem campos em branco, tente novamente por favor!',
        );
    }else{
        //var para receber comands sql
        $sql = "INSERT INTO diciplinas (Nome, Professor, Nota) VALUE ('".$Nome."', '".$Professor."', '".$Nota."')";
        //testar a linha sql diretamente no bd
        if(mysqli_query($conecta, $sql)){
            $dados = array(
            'tipo' == 'alert-success',
            'mensagem' == "A disciplina ".$Nome." foi salva com sucesso!",
            );
        }else{
            $dados = array(
            'tipo' == 'alert-danger',
            'mensagem' == "Deu merda....".mysqli_error($conecta),
            );
        }
    }

    echo json_encode($dados);