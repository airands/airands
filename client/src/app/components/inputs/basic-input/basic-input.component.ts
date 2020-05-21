import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss'],
})
export class BasicInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() disabled: boolean;
  @Input() top: string = '8';
  @Input() bottom: string = '0';
  @Input() value: string = '';

  @ViewChild('inputEl', {static: false}) inputEl: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {}

  getInputElement(): HTMLInputElement {
    return this.inputEl.nativeElement;
  }

  get inputStyles(): Partial<CSSStyleDeclaration> {
    return {
      marginTop: this.top + 'px',
      marginBottom: this.bottom + 'px',
    }
  }

}
