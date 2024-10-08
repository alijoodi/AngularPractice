import { Component, input, Input } from '@angular/core';
import { InvestmentCalculatorService } from '../../Services/investment-calculator.service';
import { IInvestmentinput } from '../../Models/iinvestmentinput';
import { AnnualInvestmentData } from '../../Models/annual-investment-data';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  investValue = input<IInvestmentinput>();
  calculatedResultInput = input<AnnualInvestmentData[]>();
  @Input() calculatedResultInput1: AnnualInvestmentData[] = [];
  calculatedResult: AnnualInvestmentData[] = [];
  constructor(
    private investmentCalculatorService: InvestmentCalculatorService
  ) {}
  Calculate() {
    this.calculatedResult =
      this.investmentCalculatorService.calculateInvestmentResults(
        this.investValue()
      );

    console.log('investValue : ' + this.investValue());
    console.log('calculatedResult : ' + this.calculatedResult);
  }
}
