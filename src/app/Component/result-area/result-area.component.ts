import { Component, Input, OnInit } from '@angular/core';
import { CalulatorModel } from 'src/app/Model/CalculatorModel';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit {

  constructor() { }


  @Input() Calulator?: CalulatorModel ;

  ngOnInit(): void {

  }

}
