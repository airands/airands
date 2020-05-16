import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-workflow-header',
    templateUrl: './workflow-header.component.html',
    styleUrls: ['./workflow-header.component.scss'],
})
export class WorkflowHeaderComponent implements OnInit {

    @Input() handler: () => void;

    constructor(private navController: NavController) {
    }

    ngOnInit() {
    }

    handleClick() {
        this.handler ? this.handler() : this.navController.pop();
    }

}
