import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-feature-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-header.component.html',
  styleUrl: './feature-header.component.css',
})
export class FeatureHeaderComponent { }
