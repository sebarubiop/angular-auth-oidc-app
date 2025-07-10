import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = signal(false);
  
  constructor() {
    // Initialize theme from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      this.darkMode.set(savedTheme === 'dark' || (!savedTheme && prefersDark));
      
      effect(() => {
        const isDark = this.darkMode();
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark-theme', isDark);
      });
    }
  }
  
  isDarkMode() {
    return this.darkMode();
  }
  
  toggleTheme() {
    this.darkMode.update(dark => !dark);
  }
  
  setTheme(isDark: boolean) {
    this.darkMode.set(isDark);
  }
}