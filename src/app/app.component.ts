import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})

export class AppComponent {

  constructor(private router: Router) { }

  async ngOnInit() {
    console.log('On Init');
    
  }

  ngOnDestroy(): void { }
}