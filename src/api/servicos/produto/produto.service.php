<?php

//CRUD
class ProdutoService {

	private $conexao;
	private $produto;

	public function __construct(Conexao $conexao, Produto $produto) {
		$this->conexao = $conexao->conectar();
		$this->produto = $produto;
	}

	public function inserir() { //create
		$query = 'INSERT INTO produto(nome,valor, tipo_produto_id)VALUES(?,?,?)';
		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(1, mb_convert_encoding($this->produto->__get('nome'), 'ISO-8859-1', 'UTF-8'));
		$stmt->bindValue(2, $this->produto->__get('valor'));
        $stmt->bindValue(3, $this->produto->__get('tipo_produto_id'));
		$stmt->execute();
	}

	public function recuperar() { //read
		$query = '
			select 
				id,nome
			from 
				produto
				
		';
		$stmt = $this->conexao->prepare($query);
		$stmt->execute();

		$produtos=[];
        $I=0;

        while($Fetch=$stmt->fetch(PDO::FETCH_ASSOC)){
            $produtos[$I]=[
                "id"=>$Fetch['id'],
                "nome"=>$Fetch['nome'],
            ];
            $I++;
        }

		return $produtos;
	}


	public function get_valor_produto($id){


		$query = "
		SELECT p.valor, tp.imposto_id, i.valor 'valor_imposto' 
		FROM produto as p 
		JOIN tipo_produto AS tp ON p.tipo_produto_id = tp.id 
		JOIN valor_produto AS i ON tp.imposto_id = i.id 
		WHERE p.id = $id	
		";
		$stmt = $this->conexao->prepare($query);
		$stmt->execute();

		$produto=[];
        $I=0;

        while($Fetch=$stmt->fetch(PDO::FETCH_ASSOC)){
            $produto[$I]=[
                "valor"=>$Fetch['valor'],
				"valor_imposto"=>$Fetch['valor_imposto']
			];
				
            $I++;
        }

		return $produto;


	}
}

?>