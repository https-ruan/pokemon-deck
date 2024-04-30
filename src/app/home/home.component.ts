import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecksService } from '@shared/services/decks.service';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxRippleModule,
  IgxTooltipModule,
} from 'igniteui-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IgxTooltipModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public readonly decksService: DecksService) {}
}
