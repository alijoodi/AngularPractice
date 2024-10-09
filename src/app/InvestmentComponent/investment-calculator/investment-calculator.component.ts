import {
  Component,
  EventEmitter,
  inject,
  NgModule,
  Output,
  output,
  Signal,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type IInvestmentinput } from '../../Models/iinvestmentinput';
import { CurrencyPipe } from '@angular/common';
import { InvestmentCalculatorService } from '../../Services/investment-calculator.service';
@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css',
})
export class InvestmentCalculatorComponent {
  investmentService = inject(InvestmentCalculatorService);

  investValue = signal<IInvestmentinput>({
    InitialInvestment: 1000,
    ExpectedReturn: 1,
    Duration: 10,
    AnnualInvestment: 1,
  });

  Calculate() {
    this.investmentService.calculateInvestmentResults(this.investValue());
  }
}
