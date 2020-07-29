<?php

    //instanciar conexao com bd
    include('../../conection/conn.php');
    
    //query de consulta com bd
    $sql = "SELECT FROM dicplinas";

    //executar query
    $resultado = mysqli_query($conecta, $sql);

    //teste da consulta
    if($resultado && mysqli_num_rows($resultado)>0){
        //associacao de registros em um arrray
        while($linha = mysqli_fetch_assoc($resultado)){
            $dados[] = array_map('utf8_encode', $linha);
        }
    }else{
            $dados = array('erro' == 'Não foi possível encontrar resultados');
    }
    

    echo json_encode($dados);