<?php


	require "../conexao/conexao.php";

	require "../servicos/produto/produto.service.php";
	require "../model/produto.model.php";

	require "../servicos/venda/venda.service.php";
	require "../model/venda.model.php";

	require "../servicos/vendaProduto/venda_produto.service.php";
	require "../model/venda_produto.model.php";


	$acao = isset($_GET['acao']) ? $_GET['acao'] : $acao;

	if($acao == 'venda' ) {
		
		$conexao = new Conexao();

		$valor_total = 0;

		$valor_imposto = 0;

		$valor_total_imposto = 0;

		$array_vendas  = array_chunk($_POST,2,true);


		$produto = new Produto();

		$ProdutoService = new ProdutoService($conexao, $produto);
		
		try {

		for ($x = 0; $x < count ($array_vendas); $x++) {
			
				 $valor_produto = $ProdutoService->get_valor_produto($array_vendas[$x]['tipo_produto_id:'.$x ]);
				 $valor_total   = $valor_total +  ($valor_produto[0]['valor'] * $array_vendas[$x]['quantidade:'.$x]);
				 $valor_imposto =  $valor_produto[0]['valor_imposto'];
				 $valor_total   = $valor_total + $valor_imposto;
				 $valor_total_imposto = $valor_total_imposto + $valor_imposto;

		  }


		  $venda = new Venda();

		  $venda->__set('valor_total', $valor_total);
		  $venda->__set('valor_imposto', $valor_total_imposto);
		  $VendaService = new VendaService($conexao, $venda);
		  if($VendaService->inserir()){


				$venda_ultima = new Venda();

				$VendaService = new VendaService($conexao, $venda_ultima);


				$ultima_venda = $VendaService->get_ultima_venda();

				for ($y = 0; $y < count ($array_vendas); $y++) {
				
					
					$venda_produto = new VendaProduto();

					$vendaProdutoService = new VendaProdutoService($conexao,$venda_produto);

					$venda_produto->__set('venda_id', $ultima_venda[0]['id']);
					$venda_produto->__set('produto_id', $array_vendas[$y]['tipo_produto_id:'.$y]);
					$venda_produto->__set('quantidade', $array_vendas[$y]['quantidade:'.$y]);
					

					$vendaProdutoService->inserir();
					

			}


			
			header('Location: http://localhost:3000/Vendas');



		  }



		}
		catch(Exception $e){
			echo  print_r($e);
		}
	
	} 

?>