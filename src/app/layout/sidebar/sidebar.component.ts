import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ RouterLink, NgTemplateOutlet, CommonModule],
  inputs: ['openToggle'],
  outputs: ['toggle'],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() openToggle = false;
  @Output() toggle = new EventEmitter<void>();

  sidebarItems = [
    {
      label: 'Dashboard',
      icon: 'home',
      route: '/'
    },
    {
      label: 'About',
      icon: 'person',
      route: '/about'
    },
    {
      label: 'Education',
      icon: 'school',
      route: '/education'
    },
    {
      label: 'Experience',
      icon: 'work',
      route: '/experience'
    },
    {
      label: 'Projects',
      icon: 'code',
      route: '/projects'
    },
    {
      label: 'Contact',
      icon: 'contact_mail',
      route: '/contact'
    }
  ];
}
