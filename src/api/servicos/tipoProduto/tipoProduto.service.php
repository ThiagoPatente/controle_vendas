<?php

//CRUD
class TipoProdutoService {

	private $conexao;
	private $tipo_produto;

	public function __construct(Conexao $conexao, TipoProduto $tipo_produto) {
		$this->conexao = $conexao->conectar();
		$this->tipo_produto = $tipo_produto;
	}

	public function inserir() { //create
		$query = 'INSERT INTO tipo_produto(nome, imposto_id)VALUES(?,?)';
		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(1, mb_convert_encoding($this->tipo_produto->__get('nome'), 'ISO-8859-1', 'UTF-8'));
		$stmt->bindValue(2, $this->tipo_produto->__get('imposto_id'));
		$stmt->execute();
	}

	public function recuperar() { //read
		$query = '
			select 
				id,nome
			from 
				tipo_produto
				
		';
		$stmt = $this->conexao->prepare($query);
		$stmt->execute();

		$tipos_produtos=[];
        $I=0;

        while($Fetch=$stmt->fetch(PDO::FETCH_ASSOC)){
            $tipos_produtos[$I]=[
                "id"=>$Fetch['id'],
                "nome"=>$Fetch['nome'],
            ];
            $I++;
        }

		return $tipos_produtos;
	}

	
}

?>