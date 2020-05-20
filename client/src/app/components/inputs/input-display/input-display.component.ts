import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-display',
  templateUrl: './input-display.component.html',
  styleUrls: ['./input-display.component.scss'],
})
export class InputDisplayComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {}

  get hasLabel(): boolean {
    return Boolean(this.label);
  }

}
