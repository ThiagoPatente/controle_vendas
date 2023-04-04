<?php

class VendaProduto {
	private $id;
	private $produto_id;
	private $venda_id;
	private $quantidade;

	public function __get($atributo) {
		return $this->$atributo;
	}

	public function __set($atributo, $valor) {
		$this->$atributo = $valor;
		return $this;
	}
}

?>