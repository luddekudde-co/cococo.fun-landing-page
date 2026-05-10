import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  stuck = signal(false);

  constructor(public theme: ThemeService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.stuck.set(window.scrollY > 4);
  }
}
