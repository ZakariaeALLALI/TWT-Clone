import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-followbar',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './followbar.component.html',
  styleUrl: './followbar.component.css'
})
export class FollowbarComponent {

}
