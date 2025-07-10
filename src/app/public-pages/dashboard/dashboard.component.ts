import { Component } from "@angular/core";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section class="text-center p-8">
      <h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p class="mt-2 text-gray-600">I'm a UI/UX and Frontend Engineer based in Australia.</p>
    </section>
  `,
})
export class DashboardComponent {}
