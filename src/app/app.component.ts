import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Porter Lyman
      </h1>
    </div>


    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'PorterLyman';
}
