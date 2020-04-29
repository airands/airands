import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Order, OrderItem} from "../../interfaces/order";
import {IonButton, IonContent} from "@ionic/angular";
import {Capacitor, Plugins} from "@capacitor/core";

@Component({
  selector: 'app-order',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss']
})
export class OrderPage implements AfterViewInit {

  @ViewChild('content', {static: false}) content: IonContent;
  @ViewChild('submitBtn', {static: false}) submitBtn: IonButton;

  order: Order = {
    storeName: '',
    items: [{
      name: '',
      quantity: 1,
    }],
  };

  activeIndex: number = 0;

  constructor() {
  }

  ngAfterViewInit(): void {
    if (Capacitor.isPluginAvailable("Keyboard")) {
      Plugins.Keyboard.addListener('keyboardDidShow', () => {
        setTimeout(() => {
          if (this.activeIndex === this.lastIndex) {
            this.content.scrollToBottom(200);
          }
        }, 10);
      });
    }
  }

  public addItem(): void {
    this.order.items.push({
      name: "",
      quantity: 1,
    });
    this.activeIndex = this.lastIndex;
  }

  public handleClick(index): void {
    const {activeIndex} = this;
    if (index < this.lastIndex && !Boolean(this.orderItems[this.lastIndex].name)) {
      this.orderItems.pop();
    } else if (this.orderItems.length > 1 && index === this.lastIndex) {
      this.orderItems.pop();
    } else {
      this.activeIndex = activeIndex === index ? -1 : index;
    }
  }

  public getPlaceholder(index: number): string {
    return index === 0 ? "Example: 2L Skim Milk" : "";
  }

  public isActive(index: number) {
    return this.activeIndex === index;
  }

  get orderItems(): OrderItem[] {
    return this.order.items;
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

  get canPlaceOrder(): boolean {
    return this.orderItems.length > 1 || Boolean(this.lastItem) && Boolean(this.lastItem.name);
  }

}
