import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent implements OnInit {

  @Input() color: "primary";
  @Input() icon: string;
  @Input() iconColor: string;
  @Input() bottom: string;

  constructor() { }

  ngOnInit() {}

  get colorClass(): string {
      return this.color;
  }

  get iconStyle() {
    return {
      color: this.iconColor,
    };
  }

  get buttonStyle() {
    return {
      marginBottom: `${this.bottom || '8'}px`,
    };
  }

  get hasIcon(): boolean {
    return Boolean(this.icon);
  }

}
