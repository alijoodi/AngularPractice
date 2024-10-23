import { Component } from '@angular/core';
import { DPInewTaskComponent } from "../dpinew-task/dpinew-task.component";
import { DPItaskListComponent } from "../dpitask-list/dpitask-list.component";

@Component({
  selector: 'app-dpitask',
  standalone: true,
  imports: [DPInewTaskComponent, DPItaskListComponent],
  templateUrl: './dpitask.component.html',
  styleUrl: './dpitask.component.css'
})
export class DPItaskComponent {

}
