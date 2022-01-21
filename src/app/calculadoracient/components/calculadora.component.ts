import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {

  private numero1!:string;
  private numero2!:string;
  private resultado!:string;
  private operacao!:string;

  constructor(private calculadoraService:CalculadoraService) { }

  ngOnInit(){
    this.limpar();
  }

  limpar(): void{
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  concatenaNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null || numAtual ===  this.resultado) {
      numAtual = '';
    }

    if (numAtual === '' && numConcat === '.') {
      return '0.';
    }

    if (numAtual.indexOf('.') > -1 && numConcat === '.') {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  adicionaNumero(numero:string):void{
    if (this.operacao == null){
      this.numero1 = this.concatenaNumero(this.numero1, numero)
    } else {
      this.numero2 = this.concatenaNumero(this.numero2, numero)
    }
  }

  definirOperacao(operacao:string):void{

    if(this.operacao == null){
      this.operacao = operacao;
      return;
    }

    if(this.numero2 != null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      ).toString();
    }
  }

  calcular():void{
    
    if (this.numero2 === null && (this.operacao === "+" || this.operacao === "-" || this.operacao === "*" || this.operacao === "/")) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    ).toString();

    this.numero1 = this.resultado;
    this.numero2 = null;
    this.operacao = null
  }

  get display(): string {

    if (this.numero2 != null) {
      return this.numero1+this.operacao+this.numero2
    }
    if(this.operacao !=null){
      return this.numero1+this.operacao
    }
    return this.numero1.toString();
  }

  adicionaPi(): void {
    if (this.operacao === null) {
      this.numero1 = '3.14159265359';
    } else {
      this.numero2 = '3.14159265359';
    }
  }

}

