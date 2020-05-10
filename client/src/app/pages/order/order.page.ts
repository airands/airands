import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {OrderItem} from "../../interfaces/order";
import {IonButton, IonContent, IonInput} from "@ionic/angular";
import {Capacitor, Plugins} from "@capacitor/core";

@Component({
    selector: 'app-order',
    templateUrl: 'order.page.html',
    styleUrls: ['order.page.scss']
})
export class OrderPage implements AfterViewInit {

    @ViewChild('content', {static: false}) content: IonContent;
    @ViewChild('submitBtn', {static: false}) submitBtn: IonButton;

    items: OrderItem[] = [
        {
            name: '',
            quantity: 1,
            isChecked: false,
        }
    ];

    _isEditMode: boolean;

    ngAfterViewInit(): void {
        this.initKeyboardOffsetListener();
    }

    addItem(): void {
        if (this.canCreateItem) {
            this.items.push({ name: '', quantity: 1, isChecked: false});
            this.scrollToBottom();
        }
    }

    deleteItems() {
        this.items = this.items.filter((item) => !item.isChecked);
        this.setEditMode(false);
    }

    setEditMode(value: boolean): void {
        this._isEditMode = value;
    }

    handleItemChecked(index: number, isChecked: boolean) {
        this.items[index].isChecked = isChecked;
    }

    async handleItemCreated(index: number, ionInput: IonInput) {
        if (index > 0) {
            const input = await ionInput.getInputElement();
            setTimeout(() => {
                input.focus();
            }, 100);
        }
    }

    private scrollToBottom(): void {
        const startTime = Date.now();

        const interval = setInterval(() => {
            this.content.scrollToBottom(400);

            if (Date.now() - startTime >= 400) {
                clearInterval(interval);
            }
        }, 100);
    }

    private initKeyboardOffsetListener(): void {
        const contentEl = document.querySelector('ion-content') as HTMLElement;

        if (Capacitor.isPluginAvailable("Keyboard")) {
            Plugins.Keyboard.addListener('keyboardWillShow', () => {
                contentEl.style.setProperty('--keyboard-offset', '500px');
            });

            Plugins.Keyboard.addListener('keyboardWillHide', () => {
                contentEl.style.setProperty('--keyboard-offset', '150px');
            });
        }
    }

    get orderItems(): OrderItem[] {
        return this.items;
    }

    get lastIndex(): number {
        return this.orderItems.length - 1;
    }

    get lastItem(): OrderItem {
        return this.orderItems[this.lastIndex];
    }

    get canCreateItem(): boolean {
        if (this.lastItem) {
            return Boolean(this.lastItem.name);
        }

        return this.orderItems.length <= 0;
    }

    get isEditMode(): boolean {
        return this._isEditMode;
    }

    get canPlaceOrder(): boolean {
        return this.orderItems.length > 1 || Boolean(this.lastItem) && Boolean(this.lastItem.name);
    }

    get deleteCount(): number {
        return this.items.filter((item) => item.isChecked).length;
    }

}
