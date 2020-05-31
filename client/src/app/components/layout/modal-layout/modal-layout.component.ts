import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.scss'],
})
export class ModalLayoutComponent implements OnInit {

  @Input()
  public hasBackButton: boolean = true;

  constructor() { }

  ngOnInit() {}

}
