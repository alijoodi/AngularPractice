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
import { InvestmentCalculatorService } from '../../Services/investment-calculator.service';
import { AnnualInvestmentData } from '../../Models/annual-investment-data';
import { CurrencyPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [FormsModule, CurrencyPipe,DatePipe],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css',
})
export class InvestmentCalculatorComponent {

  @Output() investValueOutput = new EventEmitter<IInvestmentinput>();
  constructor(
    private investmentCalculatorService: InvestmentCalculatorService
  ) {}
  investValue: IInvestmentinput = {
    InitialInvestment: 1000,
    ExpectedReturn: 1,
    Duration: 10,
    AnnualInvestment: 1,
  };

  ReturnValue() {
    this.investValueOutput.emit(this.investValue);
  }
}
