import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {


/*Definindo as constantes utilizadas para definir as opereções de calculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRAÇÃO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly RAIZ: string = '√';
  static readonly CUBO: string = '³';
  static readonly QUADRADO: string = '²';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number { 
    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;

      case CalculadoraService.SUBTRAÇÃO:
        resultado = num1 - num2;
      break;

      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;

      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;

      case CalculadoraService.QUADRADO:
        resultado = Math.pow(num1, 2);
      break;

      case CalculadoraService.RAIZ:
        resultado = Math.sqrt(num1);
      break;

      case CalculadoraService.CUBO:
        resultado = Math.pow(num1, 3);
      break;
      
      default:
        resultado = 0;
    }
    return resultado;
  }
}
