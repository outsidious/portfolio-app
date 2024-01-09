import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { tuiIsString } from '@taiga-ui/cdk';
import { TuiMarkerIconModule, TuiTabsModule, TuiToggleModule } from '@taiga-ui/kit';
import { AppStructure } from './app-structure';
import { Router, RouterModule } from '@angular/router';
import { TuiThemeNightService } from '@taiga-ui/addon-doc';

@Component({
  selector: 'shared-feature-header',
  standalone: true,
  imports: [CommonModule, TuiTabsModule, RouterModule, TuiToggleModule, TuiMarkerIconModule],
  templateUrl: './feature-header.component.html',
  styleUrl: './feature-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHeaderComponent implements OnInit {
  @Input()
  appStruct?: AppStructure;
  tabs: string[] = ['']
  activeElement: string = '';

  constructor(private router: Router, @Inject(TuiThemeNightService) readonly night: TuiThemeNightService) { }

  ngOnInit() {
    console.log(this.appStruct);
    if (this.appStruct) {
      this.tabs = this.appStruct.map(val => val.title);
      const path = location.pathname;
      const tab = this.appStruct.find(elem => elem.path === path);
      if (tab) {
        this.activeElement = tab.title;
      }
    }
    console.log(location);
  }

  get activeItemIndex(): number {
    return this.tabs.indexOf(this.activeElement);
  }

  onClick(activeElement: string): void {
    this.activeElement = activeElement;
    const url = this.appStruct?.find(elem => elem.title === activeElement)?.path;
    if (url) {
      this.router.navigateByUrl(url);
    }
  }
}
