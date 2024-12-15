import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import { FollowbarComponent } from "../shared/components/followbar/followbar.component";
import { LoginModalComponent } from "../shared/auth/login-modal/login-modal.component";
import { RegisterModalComponent } from "../shared/auth/register-modal/register-modal.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, FollowbarComponent, LoginModalComponent, RegisterModalComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
