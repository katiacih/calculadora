import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculadora from './calculadora';


describe('Componente calculadora', () => {

  beforeEach(() => {
    render(<Calculadora />);
  })
  
  it('Deve renderizar o componente sem erros', () => {
    
    const e = screen.getByTestId('calculadora');
    expect(e).toBeInTheDocument();
  });

  it('deve limpar o campo de números', () => {
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('C'))
    const input = screen.getByTestId('input')
    expect(input).toHaveValue('0')
  })

  it('deve somar 3 + 2 e obter 5', () => {
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    const input = screen.getByTestId('input')
    expect(input).toHaveValue('5')
  })

  it('deve subtrair 3 - 2 e obter 1', () => {
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    const input = screen.getByTestId('input')
    expect(input).toHaveValue('1')
  })

  it('deve multiplicar 3 * 4 e obter 12', () => {
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('*'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('='))
    const input = screen.getByTestId('input')
    expect(input).toHaveValue('12')
  })


  it('deve dividir 3 / 2 e obter 1.5', () => {
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('/'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    const input = screen.getByTestId('input')
    expect(input).toHaveValue('1.5')
  })

  it('deve somar 2.5 + 3 e obter 5.5', () => {
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    const input = screen.getByTestId('input')
    expect(input).toHaveValue('5.5')
  })
})
