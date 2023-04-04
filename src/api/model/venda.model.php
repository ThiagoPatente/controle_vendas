<?php

class Venda {
	private $id;
	private $valor_total;
	private $valor_imposto;

	public function __get($atributo) {
		return $this->$atributo;
	}

	public function __set($atributo, $valor) {
		$this->$atributo = $valor;
		return $this;
	}
}

?>