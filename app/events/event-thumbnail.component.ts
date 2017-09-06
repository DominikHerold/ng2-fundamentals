import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'events-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
    <div class="row">        
        <div *ngFor="let event of events" class="col-md-5">        
            <h2>{{event.name}}</h2>
            <div>ID: {{event.id}}</div>
            <div>Cost: {{event.price}} $</div>
            <div>
                <span>foo</span>
                <span class="pad-left">bar</span>
            </div>
        </div>        
    </div>    
    
    <button class="btn btn-primary" (click)="handleClickMe()">Klicken</button>
    </div> 
    `,
    styles: [`
        .pad-left { margin-left: 50px;}
        .well div { color: #bbb;}
    `]  
})
export class EventThumbnailComponent{
    @Input() events:any
    @Output() eventClick = new EventEmitter()
    myVariable:any = "My Secret"

    handleClickMe(){
        this.eventClick.emit(this.events[0].name)
    }

    logFoo(){
        console.log("foo");
    }
}