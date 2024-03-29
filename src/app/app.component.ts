import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  display: string = 'none'

  toggleSidebar(){
    if(this.display == 'none'){
      this.display = 'block'
    }
    else{
      this.display = 'none'
    }
  }
}
