import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private isToastSubject = new BehaviorSubject<string>('');
  toast$ = this.isToastSubject.asObservable();

  show(message: string) {
    this.isToastSubject.next(message);
  }
}
