import { Component, OnInit } from '@angular/core';
import { CalulatorModel } from 'src/app/Model/CalculatorModel';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {

  constructor() { }

  number : number [] = [1,2,3,4,5,6,7,8,9,0];

  operator : string[] = ['*' ,'-','/','+']

  calculator : CalulatorModel = {

  };

  numberClick (number : number) {


    if( this.calculator.operation == null ) {
      if( this.calculator.firstNumber != null){
        this.calculator.firstNumber = +(this.calculator.firstNumber?.toString() + number.toString());
      }
      else{
        this.calculator.firstNumber = number;
      }
    }
    else{
      if( this.calculator.secondNumber != null){
        this.calculator.secondNumber = +(this.calculator.secondNumber?.toString() + number.toString());
      }
      else{
        this.calculator.secondNumber = number;
      }    }
  }

  operationClick ( opert : string )  {
    if(  this.calculator.firstNumber != null && this.calculator.operation == null ){
      this.calculator.operation = opert;
    }
  }

  calculateValue (first: number, second :number) {

    switch ( this.calculator.operation) {
      case '*' : this.calculator.result = first * second;
                break;
      case '-' :this.calculator.result = first - second;
                break;
      case '+' :this.calculator.result = first + second;
                break;
      case '/' :this.calculator.result = first / second;
                break;
    }
  }
  Clear():void {
    this.calculator = {};
  }

  ngOnInit(): void {
  }

}
