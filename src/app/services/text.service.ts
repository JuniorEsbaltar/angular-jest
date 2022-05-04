import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  constructor() {}
  private _text$ = new BehaviorSubject<string>('');
  getText(): BehaviorSubject<string> { return this._text$ }
  setText(text: string) { this._text$.next(text) }
}
