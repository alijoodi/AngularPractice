import { Component, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  size = model<{ width: string; height: string }>({
    width: '200',
    height: '200',
  });

  restSize() {
    this.size.set({ width: '200', height: '200' });
    console.log('restSize');
  }
}
