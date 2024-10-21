import { Component } from '@angular/core';
import { TemperaturePipe } from '../Pipes/temperature.pipe';

@Component({
  selector: 'app-pipe-test',
  standalone: true,
  imports: [TemperaturePipe],
  templateUrl: './pipe-test.component.html',
  styleUrl: './pipe-test.component.css'
})
export class PipeTestComponent {

}
