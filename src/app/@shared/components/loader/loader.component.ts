import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  public loading$ = this._loaderService.isLoading$;

  constructor(private readonly _loaderService: LoaderService) {}
}
