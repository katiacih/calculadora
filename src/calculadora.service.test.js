import React from 'react'
import ReactDOM from 'react-dom'
import CalculadoraService from './calculadora.service'

describe('Teste do CalculadoraService', () => {
 const [calcular, contatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] =  CalculadoraService();

 it('Quando realizado soma de 1 + 4 deve ser 5', () => {
  let soma= calcular(1,4,SOMA)
  expect(soma).toEqual(5)
 })

 it('Quando realizado subtracao de 1 - 4 deve ser -3', () => {
  let sub= calcular(1,4,SUBTRACAO)
  expect(sub).toEqual(-3)
 })

 it('Quando realizado divisao de 1 / 4 deve ser 0.25', () => {
  let sub= calcular(1,4,DIVISAO)
  expect(sub).toEqual(0.25)
 })

 it('Quando realizado divisao por zero 1/0 deve ser 1', () => {
  let sub= calcular(1,0,DIVISAO)
  expect(sub).toEqual(1)
 })

 it('Quando realizado multiplicacao de 1 * 4 deve ser 4', () => {
  let sub= calcular(1,4,MULTIPLICACAO)
  expect(sub).toEqual(4)
 })


 it('Deve retornar zero apra operação inválida', () => {
  let operacao = calcular(1,4,'%')
  expect(operacao).toEqual(0)
 })

})