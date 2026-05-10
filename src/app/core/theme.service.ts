import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkSignal = signal(false);

  constructor() {
    if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('theme');
      const isDark = stored === '1';
      this.isDarkSignal.set(isDark);
      document.documentElement.dataset['dark'] = isDark ? '1' : '0';
    }
  }

  isDark() {
    return this.isDarkSignal();
  }

  toggle() {
    const newValue = !this.isDarkSignal();
    this.isDarkSignal.set(newValue);

    if (typeof document !== 'undefined') {
      document.documentElement.dataset['dark'] = newValue ? '1' : '0';
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newValue ? '1' : '0');
    }
  }
}
