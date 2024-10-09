import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './UserComponent/user/user.component';
import { UserListComponent } from './UserComponent/user-list/user-list.component';
import { TaskListComponent } from './UserComponent/task-list/task-list.component';
import { UserService } from './Services/user.service';
import { InvestmentHeaderComponent } from './InvestmentComponent/investment-header/investment-header.component';
import { InvestmentCalculatorComponent } from './InvestmentComponent/investment-calculator/investment-calculator.component';
import { InvestmentResultComponent } from './InvestmentComponent/investment-result/investment-result.component';
import { IInvestmentinput } from './Models/iinvestmentinput';
import { AnnualInvestmentData } from './Models/annual-investment-data';
import { InvestmentCalculatorService } from './Services/investment-calculator.service';
import { DeepDiveComponentHeaderComponent } from "./ComponentsTemplateDeepDiveComponent/deep-dive-component-header/deep-dive-component-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    TaskListComponent,
    InvestmentHeaderComponent,
    InvestmentCalculatorComponent,
    InvestmentResultComponent,
    DeepDiveComponentHeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private investmentCalculatorService: InvestmentCalculatorService
  ) {}

  userId: string = 'u1';
  users = signal(this.userService.getUsers());
  title = 'first-angular-app';

  investmentComponentVisible = true;
  todoComponent = !this.investmentComponentVisible;

  componentType: ComponentType = ComponentType.Dashboard;

  investValue = signal<IInvestmentinput | undefined>(undefined);
  calculatedResult = signal<AnnualInvestmentData[] | undefined>(undefined);
}
export enum ComponentType {
  User = 1,
  Investment = 2,
  Dashboard = 3,
}
