import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ToastService } from '@shared/services/toast.service';
import {
  HorizontalAlignment,
  IgxToastComponent,
  IgxToastModule,
  PositionSettings,
  VerticalAlignment,
} from 'igniteui-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [CommonModule, IgxToastModule],
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit, OnDestroy {
  @ViewChild(`toastRef`, { read: IgxToastComponent })
  toastRef!: IgxToastComponent;
  private _subscription$ = new Subscription();
  private _positionSettings: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Center,
    verticalDirection: VerticalAlignment.Bottom,
  };

  constructor(private readonly _toastService: ToastService) {}

  ngOnInit(): void {
    this._subscription$.add(
      this._toastService.toast$.subscribe({
        next: (message) => {
          if (!message) return;

          this.toastRef.open(message, this._positionSettings);
        },
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }
}
