<?php

//CRUD
class VendaProdutoService {

	private $conexao;
	private $venda_produto;

	public function __construct(Conexao $conexao, VendaProduto $venda_produto) {
		$this->conexao = $conexao->conectar();
		$this->venda_produto = $venda_produto;
	}

	public function inserir() { //create
		$query = "INSERT INTO venda_produto(produto_id,quantidade,venda_id)VALUES(?,?,?)";

		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(1, $this->venda_produto->__get('produto_id'));
        $stmt->bindValue(2, $this->venda_produto->__get('quantidade'));
		$stmt->bindValue(3, $this->venda_produto->__get('venda_id'));
		$stmt->execute();
	}

    
}

?>