import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'welcome-feature-hello-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-feature-hello-page.component.html',
  styleUrl: './welcome-feature-hello-page.component.scss',
})
export class HelloPageComponent { }
