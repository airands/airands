import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OrderItem} from "../../interfaces/order";
import {IonInput} from "@ionic/angular";

@Component({
    selector: 'app-item-field',
    templateUrl: './item-field.component.html',
    styleUrls: ['./item-field.component.scss'],
})
export class ItemFieldComponent implements AfterViewInit, OnInit {

    @ViewChild('ionInput', {static: false}) ionInput: IonInput;

    private _active: boolean;

    @Input() item: OrderItem;
    @Input() skipFocus: boolean;
    @Input() placeholder: string;

    get active(): boolean {
        return this._active;
    }

    @Input()
    set active(active: boolean) {
        this._active = active;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.ionInput.getInputElement().then((input) => {
            setTimeout(() => !this.skipFocus ? input.focus() : null, 50);
        });
    }

}
