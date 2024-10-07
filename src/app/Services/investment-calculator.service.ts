import { Injectable } from '@angular/core';
import { IInvestmentinput } from '../Models/iinvestmentinput';
import { type AnnualInvestmentData } from '../Models/annual-investment-data';

@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculatorService {
  public calculateInvestmentResults(
    investmentVal?: IInvestmentinput
  ): AnnualInvestmentData[] {
    const annualData: AnnualInvestmentData[] = [];
    if (investmentVal) {
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
        annualData.push({
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
    }

    return annualData;
  }
}
