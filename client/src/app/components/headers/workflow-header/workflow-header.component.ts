import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-workflow-header',
    templateUrl: './workflow-header.component.html',
    styleUrls: ['./workflow-header.component.scss'],
})
export class WorkflowHeaderComponent implements OnInit {

    @Input() handler: () => void;
    @Input() hasBack: boolean = true;
    @Input() hasClose: boolean = true;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    handleClick() {
        this.handler ? this.handler() : this.modalNav().pop();
    }

    closeModal() {
        this.modalController.dismiss();
    }

    modalNav(): HTMLIonNavElement {
        return document.querySelector('ion-nav') as HTMLIonNavElement;
    }

}
