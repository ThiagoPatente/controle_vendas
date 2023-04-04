<?php


/**
 * Classe ValorProduto
 *
 *
 * @copyright  2006 teste Technologies
 * @license    http://www.zend.com/license/3_0.txt   PHP License 3.0
 * @version    Release: 1.0
 * @link       http://dev.zend.com/package/PackageName
 * @since      Class available since Release 1.0
 */ 

class Conexao {

	private $host = 'localhost';
	private $dbname = 'controle_vendas';
	private $user = 'root';
	private $pass = '';

	public function conectar() {
		try {

			$conexao = new PDO(
				"mysql:host=$this->host;dbname=$this->dbname",
				"$this->user",
				"$this->pass"				
			);

			return $conexao;


		} catch (PDOException $e) {
			echo '<p>'.$e->getMessage().'</p>';
		}
	}
}

?>