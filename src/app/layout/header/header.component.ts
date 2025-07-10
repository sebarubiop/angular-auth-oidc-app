import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  outputs: ['toggleSidebar'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}
