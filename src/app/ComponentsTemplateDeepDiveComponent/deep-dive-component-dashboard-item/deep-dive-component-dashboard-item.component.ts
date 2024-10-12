import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-deep-dive-component-dashboard-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDivider],
  templateUrl: './deep-dive-component-dashboard-item.component.html',
  styleUrl: './deep-dive-component-dashboard-item.component.css',
})
export class DeepDiveComponentDashboardItemComponent {
  headerInfo = input.required<{ title: string; subTitle: string }>();
  imageInfo = input.required<{ src: string; alt: string }>();
}
