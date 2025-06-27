import { Component } from '@angular/core';
import { FiglioComponent } from '../figlio-component/figlio-component';
import { Figlio2Component } from '../figlio-2-component/figlio-2-component';

@Component({
  selector: 'app-padre-component',
  imports: [FiglioComponent, Figlio2Component],
  templateUrl: './padre-component.html',
  styleUrl: './padre-component.css'
})
export class PadreComponent {
  contatore: number = 0;

  onConteggioCambiato(nuovoValore:number): void
  {
    this.contatore = nuovoValore;
  }
}
