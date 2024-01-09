import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiBrightness } from "@taiga-ui/core";
import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppStructure, FeatureHeaderComponent } from '@portfolio-app/feature-header';
import { TuiThemeNightModule, TuiModeModule } from '@taiga-ui/core';
import { TuiThemeNightService } from '@taiga-ui/addon-doc/services';
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [RouterModule, FeatureHeaderComponent, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiThemeNightModule,
    TuiModeModule, CommonModule],
  selector: 'portfolio-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  appStruct: AppStructure = [{ path: '/location', title: 'Обо мне' },
  { path: '/positions', title: 'Позиции' },
  { path: '/projects', title: 'Проекты' }]

  constructor(@Inject(TuiThemeNightService) readonly night: TuiThemeNightService) { }

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

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }
}
