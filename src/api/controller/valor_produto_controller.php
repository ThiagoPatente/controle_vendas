<?php

	require "../conexao/conexao.php";
	require "../servicos/valorProduto/valorProduto.service.php";
	require "../model/valor_produto.model.php";


	$acao = isset($_GET['acao']) ? $_GET['acao'] : $acao;

	if($acao == 'inserir' ) {
		$valor_produto = new ValorProduto();
		$valor_produto->__set('nome', $_POST['nome']);
		$valor_produto->__set('valor', $_POST['valor']);


		$conexao = new Conexao();

		$valorProdutoService = new ValorProdutoService($conexao, $valor_produto);
		$valorProdutoService->inserir();

		header('Location: http://localhost:3000/produtoValor');
	
	} else if($acao == 'recuperar') {
		
		$valor_produto = new ValorProduto();
		$conexao = new Conexao();

		$valorProdutoService = new ValorProdutoService($conexao, $valor_produto);
		$valores_produtos = $valorProdutoService->recuperar();



	
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($valores_produtos);
	
	} 

?>