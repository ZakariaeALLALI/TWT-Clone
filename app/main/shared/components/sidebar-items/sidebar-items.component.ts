import { Component } from '@angular/core';
import { SidebarItems } from '../../../interface';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from "../../auth/login-modal/login-modal.component";

@Component({
  selector: 'sidebar-items',
  standalone: true,
  imports: [RouterLink, CommonModule, LoginModalComponent],
  templateUrl: './sidebar-items.component.html',
  styleUrl: './sidebar-items.component.css'
})
export class SidebarItemsComponent {

  items : Array<SidebarItems> =[
    {
      label: 'Home',
      rout: '/',
      icon: 'home',
    },
    {
      label: 'Notifications',
      rout: '/notifications',
      icon: 'notifications'
    }

  ];

  isModalVisible = false;

  showLoginModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

}
