import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../../services/message.service'
import {Message} from "../../models/message.model";
import {User} from "../../models/user.model";
import {UserGlobalService} from "../../services/user-global.service";


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  messages: Message[] = [];
  idUser : any;
  // @ts-ignore
  userLog: User;


  messageSend:  Message = {
    _id: '',
    // @ts-ignore
    user: this.userLog,
    message: '',
    date: new Date()
  };
  constructor(
    private messageService: MessageService,
    private userGlobalService: UserGlobalService ) { }

  ngOnInit(): void {
    this.userGlobalService.userGlobal$
      .subscribe((user:User) =>{
        this.userLog = user;
        this.idUser = this.userLog._id;
        this.loadMessages(this.idUser)
      });


  }
  loadMessages(idUsario :any){
    this.messageService.getMessagesByUser(idUsario)
      .subscribe(data => {
        this.messages = data;
        console.log(this.messages);
      });

  }
  sendMessage(){
    this.messageSend.user = this.userLog;
    console.log(this.messageSend)
    this.messageService.saveMessage(this.messageSend)
      .subscribe(data =>{
            console.log('Se envio')
        this.loadMessages(this.idUser)
        }
      )
  }

}
