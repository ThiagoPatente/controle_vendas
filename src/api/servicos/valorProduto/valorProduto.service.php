<?php

//CRUD
class ValorProdutoService {

	private $conexao;
	private $valor_produto;

	public function __construct(Conexao $conexao, ValorProduto $valor_produto) {
		$this->conexao = $conexao->conectar();
		$this->valor_produto = $valor_produto;
	}

	public function inserir() { //create
		$query = 'INSERT INTO valor_produto(nome, valor)VALUES(?,?)';
		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(1, mb_convert_encoding($this->valor_produto->__get('nome'), 'ISO-8859-1', 'UTF-8'));
		$stmt->bindValue(2, $this->valor_produto->__get('valor'));
		$stmt->execute();
	}

	public function recuperar() { //read
		$query = '
			select 
				*
			from 
				valor_produto
				
		';
		$stmt = $this->conexao->prepare($query);
		$stmt->execute();

		$valores_produtos=[];
        $I=0;

        while($Fetch=$stmt->fetch(PDO::FETCH_ASSOC)){
            $valores_produtos[$I]=[
                "ID"=>$Fetch['ID'],
                "valor"=>$Fetch['valor'],
				"nome"=>$Fetch['nome']
            ];
            $I++;
        }

		return $valores_produtos;
	}

	
}

?>