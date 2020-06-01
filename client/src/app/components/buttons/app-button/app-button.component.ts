import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() color: 'primary' | 'facebook' | 'google' | 'apple' | 'airands';
  @Input() icon: string;
  @Input() ionicIcon: boolean = true;
  @Input() iconColor: string;
  @Input() bottom: string = '8';
  @Input() top: string = '0';
  @Input() type: string = 'button';

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
    const bottom = this.bottom;
    const top = this.top;
    return {
      marginBottom: `${bottom.replace('px', '')}px`,
      marginTop: `${top.replace('px', '')}px`,
    };
  }

  get hasIcon(): boolean {
    return Boolean(this.icon);
  }

}
