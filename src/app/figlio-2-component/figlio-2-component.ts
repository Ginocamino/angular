import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-figlio-2-component',
  imports: [],
  templateUrl: './figlio-2-component.html',
  styleUrl: './figlio-2-component.css'
})
export class Figlio2Component {
  @Input() count: number = 0;
  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

  incrementa(): void
  {
    this.count++;
    this.countChanged.emit(this.count)
  }

  decrementa(): void
  {
    this.count--;
    this.countChanged.emit(this.count)
  }
}

