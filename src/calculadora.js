import './calculadora.css';
import React, { useState } from 'react'
import { Jumbotron, 
  Container,
  Row,
  Button,
  Form,
  Col } from 'react-bootstrap'
  import CalculadoraService from './calculadora.service'


function Calculadora() {
  const [calcular, concatenarNumero,  SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] =  CalculadoraService();
  const [txtNumeros, setTxtNumeros] = useState('0');
  const [numero1, SetNumero1] = useState('0');
  const [numero2, SetNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function adicionaNumero(numero) {
    let resultado;
    if(operacao === null){
      resultado = concatenarNumero(numero1, numero);
      SetNumero1(resultado);
    }else {
      resultado = concatenarNumero(numero2, numero);
      SetNumero2(resultado);
    }
    setTxtNumeros(resultado);
  }

  function definirOperacao(op) {
    if(operacao === null){
      setOperacao(op)
      return;
    }
    if(numero2 !== null) {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
      setOperacao(op)
      SetNumero1(resultado.toString())
      SetNumero2(null)
      setTxtNumeros(resultado.toString())
    }
  }

  function acaoLimpar() {
    setTxtNumeros(0)
    SetNumero1(0)
    SetNumero2(null)
    setOperacao(null)
  }

  function acaoCalcular() {
    if(numero2 === null){
      return;
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
    setTxtNumeros(resultado)
  }

  return (
    <div  data-testid='calculadora'>
      <Jumbotron style={{
        background: 'transparent !important',
        backgroundColor: '#007bff',
        padding: '5px',
        margin: '5px',
        width: '400px'
      }}
    
      >
        <Container>
          <Row>
            <Col xs='3'>
              <Button onClick={() => acaoLimpar()} variant='danger'>C</Button>
            </Col>
            <Col xs='9'>
              <Form.Control
                data-testid='input'
                type='text'
                name='txtNumeros'
                className='text-right'
                readOnly='readonly'
                onChange ={definirOperacao}
                value={txtNumeros}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button  
                onClick={ () =>  adicionaNumero(7)} 
                variant='light'>7</Button>
            </Col>
            <Col>
              <Button 
                onClick={ () =>  adicionaNumero(8)} 
                variant='light'>8</Button>
            </Col>
            <Col>
              <Button 
                onClick={ () =>  adicionaNumero(9)} 
                variant='light'>9</Button>
            </Col>
            <Col>
              <Button
                onClick={ () => definirOperacao(DIVISAO)} 
                variant='warning'>/</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button 
                onClick={ () =>  adicionaNumero(4)} 
                variant='light'>4</Button>
            </Col>
            <Col>
              <Button 
                onClick={ () =>  adicionaNumero(5)} 
                variant='light'>5</Button>
            </Col>
            <Col>
              <Button 
                  onClick={ () =>  adicionaNumero(6)} 
                variant='light'>6</Button>
            </Col>
            <Col>
              <Button 
                onClick={ () => definirOperacao(MULTIPLICACAO)} 
                variant='warning'>*</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button 
                  onClick={ () =>  adicionaNumero(1)} 
                variant='light'>1</Button>
            </Col>
            <Col>
              <Button 
                  onClick={ () =>  adicionaNumero(2)} 
                variant='light'>2</Button>
            </Col>
            <Col>
              <Button 
                onClick={ () =>  adicionaNumero(3)} 
                variant='light'>3</Button>
            </Col>
            <Col>
              <Button 
                onClick={ () => definirOperacao(SUBTRACAO)}
                variant='warning'>-</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                onClick={ () => adicionaNumero(0)}  
                variant='light'>0</Button>
            </Col>
            <Col>
              <Button 
                onClick={ () => adicionaNumero('.')}
                variant='light'>.</Button>
            </Col>
            <Col>
              <Button 
                onClick={acaoCalcular}
                variant='success'>=</Button>
            </Col>
            <Col>
              <Button 
                onClick={ () => definirOperacao(SOMA)}
                variant='warning'>+</Button>
            </Col>
          </Row>
        </Container>

      </Jumbotron>
    </div>
  );
}

export default Calculadora;
