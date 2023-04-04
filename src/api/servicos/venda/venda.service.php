<?php

//CRUD
class VendaService {

	private $conexao;
	private $venda;

	public function __construct(Conexao $conexao, Venda $venda) {
		$this->conexao = $conexao->conectar();
		$this->venda = $venda;
	}

	public function inserir() { //create
		$query = "INSERT INTO venda(valor_total,valor_imposto)VALUES(?,?)";

		$stmt = $this->conexao->prepare($query);
		$stmt->bindValue(1, $this->venda->__get('valor_total'));
        $stmt->bindValue(2, $this->venda->__get('valor_imposto'));
		return $stmt->execute();
	}

	public function get_ultima_venda() { //read
		$query = '
        select id from venda
        order by id DESC
        LIMIT 1
		';
		$stmt = $this->conexao->prepare($query);
		$stmt->execute();

		$venda=[];
        $I=0;

        while($Fetch=$stmt->fetch(PDO::FETCH_ASSOC)){
            $venda[$I]=[
                "id"=>$Fetch['id']];
            $I++;
        }

		return $venda;
	}

    
}

?>