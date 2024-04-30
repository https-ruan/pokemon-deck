import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private isLoadingSubject = new BehaviorSubject<{
    loading: boolean;
    message?: string;
  }>({ loading: false });
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor() {}

  show(message?: string) {
    this.isLoadingSubject.next({ loading: true, message });
  }

  hide(message?: string) {
    this.isLoadingSubject.next({ loading: false, message });
  }
}
