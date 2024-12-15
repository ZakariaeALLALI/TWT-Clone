import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() showBackArrow:boolean = false;
  @Input() title:string = "";

  constructor(private router:Router){}

  goBack(){
    this.router.navigate(['/']);
  }

}
