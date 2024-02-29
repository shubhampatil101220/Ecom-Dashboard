import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
