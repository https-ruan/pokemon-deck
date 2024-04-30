import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxRippleModule,
  IgxTooltipModule,
} from 'igniteui-angular';

@Component({
  selector: 'go-to-home',
  standalone: true,
  imports: [
    CommonModule,
    IgxTooltipModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    RouterLink,
  ],
  templateUrl: './go-to-home.component.html',
  styleUrls: ['./go-to-home.component.scss'],
})
export class GoToHomeComponent {}
