import { Component, input } from '@angular/core';
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
  investValue = input<IInvestmentinput | undefined>(undefined);
  calculatedResultInput = input<AnnualInvestmentData[] | undefined>(undefined);

  constructor() {}
}
