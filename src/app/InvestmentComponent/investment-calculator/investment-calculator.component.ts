import {
  Component,
  EventEmitter,
  NgModule,
  Output,
  output,
  Signal,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type IInvestmentinput } from '../../Models/iinvestmentinput';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css',
})
export class InvestmentCalculatorComponent {
  constructor() {}

  investValueOutput = output<IInvestmentinput>();

  investValue = signal<IInvestmentinput>({
    InitialInvestment: 1000,
    ExpectedReturn: 1,
    Duration: 10,
    AnnualInvestment: 1,
  });

  ReturnValue() {
    this.investValueOutput.emit(this.investValue());
  }
}
