/**
 * Created by B_i_p_y_C on 16.10.2016.
 */
import {Component} from "@angular/core";

import {Card} from "./card";

@Component({
  selector: 'card-info',
  template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ message.content }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ message.username }}
                </div>
                <div class="config" *ngIf="belongsToUser()">
                    <a (click)="onEdit()">Edit</a>
                    <a (click)="onDelete()">Delete</a>
                </div>
            </footer>
        </article>
    `,
  styles: [`
       
    `]
})
export class MessageComponent {


  constructor(private messageService: MessageService, private errorService: ErrorService) {
  }

  onEdit() {
    this.messageService.editMessage(this.message);
  }

  onDelete() {
    this.messageService.deleteMessage(this.message)
      .subscribe(
        data => console.log(data),
        error => this.errorService.handleError(error)
      );
  }

  belongsToUser() {
    return localStorage.getItem('userId') == this.message.userId;
  }
}
