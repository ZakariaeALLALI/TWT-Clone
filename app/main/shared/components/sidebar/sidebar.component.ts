import { Component } from '@angular/core';
import { SidebarItemsComponent } from "../sidebar-items/sidebar-items.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
