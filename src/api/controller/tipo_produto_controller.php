<?php


	require "../conexao/conexao.php";
	require "../servicos/tipoProduto/tipoProduto.service.php";
	require "../model/tipo_produto.model.php";


	$acao = isset($_GET['acao']) ? $_GET['acao'] : $acao;

	if($acao == 'inserir' ) {
		$tipo_produto = new TipoProduto();
		$tipo_produto->__set('nome', $_POST['nome']);
		$tipo_produto->__set('imposto_id', $_POST['imposto_id']);


		$conexao = new Conexao();

		$tipoProdutoService = new TipoProdutoService($conexao, $tipo_produto);
		$tipoProdutoService->inserir();

		header('Location: http://localhost:3000/produtoTipo');
	
	} else if($acao == 'recuperar') {
		
		$tipo_produto = new TipoProduto();
		$conexao = new Conexao();

		$tipoProdutoService = new TipoProdutoService($conexao, $tipo_produto);
		$tipos_produtos = $tipoProdutoService->recuperar();



	
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($tipos_produtos);
	
	} 

?>