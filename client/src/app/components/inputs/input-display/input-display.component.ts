import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-display',
  templateUrl: './input-display.component.html',
  styleUrls: ['./input-display.component.scss'],
})
export class InputDisplayComponent implements OnInit {

  @Input() label: string;
  @Input() pre: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.pre);
  }

  get hasLabel(): boolean {
    return Boolean(this.label);
  }

}
