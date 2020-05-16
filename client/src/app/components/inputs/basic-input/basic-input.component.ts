import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss'],
})
export class BasicInputComponent implements OnInit {

  @Input() placeholder: string;

  @ViewChild('inputEl', {static: false}) inputEl: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {}

  getInputElement(): HTMLInputElement {
    return this.inputEl.nativeElement;
  }

}
