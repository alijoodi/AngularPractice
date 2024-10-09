import { Injectable, signal } from '@angular/core';
import { type IInvestmentinput } from '../Models/iinvestmentinput';
import { type AnnualInvestmentData } from '../Models/annual-investment-data';

@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculatorService {
  envestmentResult = signal<AnnualInvestmentData[]>([]);

  public calculateInvestmentResults(investmentVal?: IInvestmentinput) {
    if (investmentVal) {
      const result: AnnualInvestmentData[] = [];
      let investmentValue = investmentVal.InitialInvestment;

      for (let i = 0; i < investmentVal.Duration; i++) {
        const year = i + 1;
        const interestEarnedInYear =
          investmentValue * (investmentVal.ExpectedReturn / 100);
        investmentValue +=
          interestEarnedInYear + investmentVal.AnnualInvestment;
        const totalInterest =
          investmentValue -
          investmentVal.AnnualInvestment * year -
          investmentVal.InitialInvestment;
        result.push({
          Year: year,
          Interest: interestEarnedInYear,
          ValueEndOfYear: investmentValue,
          AnnualInvestment: investmentVal.AnnualInvestment,
          TotalInterest: totalInterest,
          TotalAmountInvested:
            investmentVal.InitialInvestment +
            investmentVal.AnnualInvestment * year,
        });
      }
      this.envestmentResult.set(result);
    }
  }
}
