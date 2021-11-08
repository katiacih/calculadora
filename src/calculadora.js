import React, { useState } from 'react';
import './calculadora.css';
import CalculadoraService from './calculadora.service';
import { Button, Flex } from 'rebass'
import { Input } from '@rebass/forms'

function Calculadora() {

  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function adicionarNumero(numero) {
    let resultado;
    if (operacao === null) {
      resultado = concatenarNumero(numero1, numero);
      setNumero1(resultado);
    } else {
      resultado = concatenarNumero(numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(resultado);
  }

  function definirOperacao(op) {
    // apenas define a operação caso ela não exista
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    // caso operação estiver definida e número 2 selecionado, realiza o cálculo da operação
    if (numero2 !== null) {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }

  function acaoCalcular() {
    if (numero2 === null) {
      return;
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    setTxtNumeros(resultado);
  }

  function limpar() {
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2(null);
    setOperacao(null);
  }

  return (
    <div style={{
      background: 'transparent !important',
      backgroundColor: 'rgb(203 211 219)',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
    <Flex className='line-flex'>
      <Button className="btn-danger" style={{ width: '66px' }} variant='primary' mr={2} onClick={limpar}>C</Button>
      <Input
        type="text"
        name="txtNumeros"
        className="text-right"
        readOnly="readonly"
        value={txtNumeros}
        data-testid="txtNumeros"
      />
    </Flex>

    <Flex>
      <Button variant="btn-secondary" style={{backgroundColor: '#6495ed'}} onClick={() => adicionarNumero('7')}>7</Button>
      <Button variant="light" style={{backgroundColor: '#6495ed'}}
        onClick={() => adicionarNumero('8')}>8</Button>
      <Button variant="light" style={{backgroundColor: '#6495ed'}}
            onClick={() => adicionarNumero('9')}>9</Button>
      <Button  style={{backgroundColor: '#778899'}}
            onClick={() => definirOperacao(DIVISAO)}>/</Button>
    </Flex>

    <Flex>
      <Button variant="btn-secondary" style={{backgroundColor: '#6495ed'}} onClick={() => adicionarNumero('4')}>4</Button>
      <Button variant="light" style={{backgroundColor: '#6495ed'}}
        onClick={() => adicionarNumero('5')}>5</Button>
      <Button variant="light" style={{backgroundColor: '#6495ed'}}
            onClick={() => adicionarNumero('6')}>6</Button>
      <Button  style={{backgroundColor: '#778899'}}
        onClick={() => definirOperacao(MULTIPLICACAO)}>*</Button>
    </Flex>

    <Flex>
      <Button variant="btn-secondary" style={{backgroundColor: '#6495ed'}} onClick={() => adicionarNumero('1')}>1</Button>
      <Button variant="light" style={{backgroundColor: '#6495ed'}}
        onClick={() => adicionarNumero('2')}>2</Button>
      <Button variant="light" style={{backgroundColor: '#6495ed'}}
            onClick={() => adicionarNumero('3')}>3</Button>
      <Button  style={{backgroundColor: '#778899'}}
        onClick={() => definirOperacao(SUBTRACAO)}>-</Button>
    </Flex>

    <Flex>
      <Button style={{backgroundColor: '#6495ed'}} onClick={() => adicionarNumero('0')}>0</Button>
      <Button style={{backgroundColor: '#6495ed'}}
        onClick={() => adicionarNumero('.')}>.</Button>
      <Button  style={{backgroundColor: '#cb64ed'}}
        onClick={acaoCalcular}>=</Button>
      <Button  style={{backgroundColor: '#778899'}}
        onClick={() => definirOperacao(SOMA)}>+</Button>
    </Flex>
    </div>
  );
}

export default Calculadora;
