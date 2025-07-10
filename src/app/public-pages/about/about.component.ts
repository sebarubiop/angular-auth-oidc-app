import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="p-8">
      <h2 class="text-2xl font-bold mb-4">About Me</h2>
      <p>I am an experienced frontend engineer with a passion for UX, Angular, and responsive design.</p>
    </section>
  `,
})
export class AboutComponent {}
