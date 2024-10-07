import {
  Component,
  EventEmitter,
  Output,
  output,
  Signal,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type IInvestmentinput } from '../../Models/iinvestmentinput';
import { InvestmentCalculatorService } from '../../Services/investment-calculator.service';
import { AnnualInvestmentData } from '../../Models/annual-investment-data';
@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css',
})
export class InvestmentCalculatorComponent {
  /**
   *
   */

  @Output() investValueOutput = new EventEmitter<IInvestmentinput>();
  constructor(
    private investmentCalculatorService: InvestmentCalculatorService
  ) {}
  investValue: IInvestmentinput = {
    InitialInvestment: 0,
    ExpectedReturn: 0,
    Duration: 0,
    AnnualInvestment: 0,
  };

  ReturnValue() {
    this.investValueOutput.emit(this.investValue);
  }
}
