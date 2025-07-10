import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    TranslateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private breakpointObserver = inject(BreakpointObserver);
  private translate = inject(TranslateService);
  public themeService = inject(ThemeService);
  
  public isHandset = signal(false);
  public currentLanguage = signal('en');
  
  ngOnInit() {
    // Check if running in browser
    if (typeof window !== 'undefined') {
      this.breakpointObserver.observe(Breakpoints.Handset)
        .subscribe(result => {
          this.isHandset.set(result.matches);
        });
      
      // Initialize language
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.setDefaultLang(savedLang);
      this.translate.use(savedLang);
      this.currentLanguage.set(savedLang);
    }
  }
  
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage.set(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }
}
