<?php


	require "../conexao/conexao.php";
	require "../servicos/produto/produto.service.php";
	require "../model/produto.model.php";


	$acao = isset($_GET['acao']) ? $_GET['acao'] : $acao;

	if($acao == 'inserir' ) {
		$produto = new Produto();
		$produto->__set('nome', $_POST['nome']);
		$produto->__set('valor', $_POST['valor']);
		$produto->__set('tipo_produto_id', $_POST['tipo_produto_id']);


		$conexao = new Conexao();

		$ProdutoService = new ProdutoService($conexao, $produto);
		$ProdutoService->inserir();

		header('Location: http://localhost:3000/produto');
	
	} else if($acao == 'recuperar') {
		
		$produto = new Produto();
		$conexao = new Conexao();

		$ProdutoService = new ProdutoService($conexao, $produto);
		$produtos = $ProdutoService->recuperar();



	
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($produtos);
	
	} 

?>