import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {OrderItem} from "../../interfaces/order";
import {IonInput} from "@ionic/angular";

@Component({
    selector: 'app-order-item',
    templateUrl: './order-item.component.html',
    styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit, AfterViewInit {

    private _active: boolean;
    private originValue: number;

    @ViewChild(IonInput, {static: false}) input: IonInput;

    @Input() item: OrderItem;
    @Input() isEditMode: boolean;

    @Output()
    checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    created: EventEmitter<IonInput> = new EventEmitter<IonInput>();

    @Output()
    enter: EventEmitter<undefined> = new EventEmitter<undefined>();

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.originValue = this.item.quantity;
        this.created.emit(this.input);
    }

    handleChecked(event: CustomEvent) {
        this.checked.emit(event.detail.checked);
    }

    handleEnterKey() {
        this.enter.emit();
    }

    handleQFocus(event: CustomEvent) {
        this.originValue = this.item.quantity;
        const target = event.target as HTMLIonInputElement;
        target.value = "";
    }

    handleQBlur(event: CustomEvent) {
        const target = event.target as HTMLIonInputElement;
        if (!target.value) {
            target.value = this.originValue;
        }
    }

    @Input()
    set active(value: boolean) {
        this._active = value;
    }

    get active(): boolean {
        return this._active;
    }

}
