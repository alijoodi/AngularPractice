import { Component, computed, inject, input } from '@angular/core';
import { IInvestmentinput } from '../../Models/iinvestmentinput';
import { AnnualInvestmentData } from '../../Models/annual-investment-data';
import { CurrencyPipe } from '@angular/common';
import { InvestmentCalculatorService } from '../../Services/investment-calculator.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  investmentService = inject(InvestmentCalculatorService);

  calculatedResult = computed(() => this.investmentService.envestmentResult());
}
