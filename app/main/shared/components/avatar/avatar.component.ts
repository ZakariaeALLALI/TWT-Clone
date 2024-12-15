import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'Avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {

  @Input() userId: string ='';
  @Input() isLarge: boolean =false;
  @Input() hasBorder: boolean =false;


}
