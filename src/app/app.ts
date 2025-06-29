import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my-component/my-component';
import { HelloWorldComponent } from './hello-world-component/hello-world-component';
import { BindingComponent } from './binding-component/binding-component';
import { DirettiveComponent } from './direttive-component/direttive-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponent, HelloWorldComponent, BindingComponent, DirettiveComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-course';
}
