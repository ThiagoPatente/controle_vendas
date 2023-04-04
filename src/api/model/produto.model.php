<?php

class Produto {
	private $id;
	private $nome;
	private $valor;
	private $tipo_produto_id;

	public function __get($atributo) {
		return $this->$atributo;
	}

	public function __set($atributo, $valor) {
		$this->$atributo = $valor;
		return $this;
	}
}

?>