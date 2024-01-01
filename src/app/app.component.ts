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
        nodeFavicon[i].setAttribute("href", `./assets/icons/outsidious_${counter}.svg`);
      }
      counter = (counter + 1) % qua;
      //timer = setTimeout(animateFavicon, 5000);
    }

    //setTimeout(animateFavicon, 5000);

    document.addEventListener('click', () => {
      animateFavicon();
    })
  }
}
