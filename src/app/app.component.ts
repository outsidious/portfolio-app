import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'portfolio-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';

  ngOnInit(): void {
    let counter = 0;
    let qua = 4;
    let nodeFavicon = document.querySelectorAll("link[rel='icon']");
    let timer: NodeJS.Timeout | null = null;

    function animateFavicon() {
      if (timer) {
        clearTimeout(timer);
      }
      for (let i = 0; i < nodeFavicon.length; i++) {
        const sizes: string | null = nodeFavicon[i].getAttribute('sizes');
        if (sizes === '48x48') {
          nodeFavicon[i].setAttribute("href", `../favicon/ico/outsidious_${counter}.ico`);
        }
        else if (sizes === 'any') {
          nodeFavicon[i].setAttribute("href", `../favicon/svg/outsidious_${counter}.svg`);
        }
      }
      counter = (counter + 1) % qua;
      timer = setTimeout(animateFavicon, 1500);
    }

    animateFavicon();
  }
}
