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
import { DeepDiveComponentHeaderComponent } from './ComponentsTemplateDeepDiveComponent/deep-dive-component-header/deep-dive-component-header.component';
import { DeepDiveComponentDashboardItemComponent } from './ComponentsTemplateDeepDiveComponent/deep-dive-component-dashboard-item/deep-dive-component-dashboard-item.component';
import { DeepDiveComponentDashboardItemTrafficComponent } from './ComponentsTemplateDeepDiveComponent/deep-dive-component-dashboard-item-traffic/deep-dive-component-dashboard-item-traffic.component';
import { DeepDiveComponentDashboardItemTicketsComponent } from './ComponentsTemplateDeepDiveComponent/deep-dive-component-dashboard-item-tickets/deep-dive-component-dashboard-item-tickets.component';
import { DeepDiveComponentDashboardItemServerStatusComponent } from './ComponentsTemplateDeepDiveComponent/deep-dive-component-dashboard-item-server-status/deep-dive-component-dashboard-item-server-status.component';
import { FormsModule } from '@angular/forms';
import { RectComponent } from './rect/rect.component';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { LogDirective } from './Directives/log.directive';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { DPItaskComponent } from "./DependencyInjectionDeepDive/dpitask/dpitask.component";

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
    DeepDiveComponentHeaderComponent,
    DeepDiveComponentDashboardItemComponent,
    DeepDiveComponentDashboardItemTrafficComponent,
    DeepDiveComponentDashboardItemTicketsComponent,
    DeepDiveComponentDashboardItemServerStatusComponent,
    FormsModule,
    RectComponent,
    TestDirectiveComponent,
    PipeTestComponent,
    DPItaskComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  hostDirectives: [LogDirective],
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private investmentCalculatorService: InvestmentCalculatorService
  ) {}

  userId: string = 'u1';
  users = signal(this.userService.getUsers());
  title = 'first-angular-app';
  rect = signal<{ width: string; height: string }>({
    width: '200',
    height: '200',
  });

  investmentComponentVisible = true;
  todoComponent = !this.investmentComponentVisible;

  componentType: ComponentType = ComponentType.DpiTask;

  investValue = signal<IInvestmentinput | undefined>(undefined);
  calculatedResult = signal<AnnualInvestmentData[] | undefined>(undefined);
}
export enum ComponentType {
  User = 1,
  Investment = 2,
  Dashboard = 3,
  Rect = 4,
  TestDirective = 5,
  Pipe = 6,
  DpiTask = 7,
}
