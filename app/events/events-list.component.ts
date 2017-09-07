import {Component, OnInit} from '@angular/core'
import {EventService} from './shared/event.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html',
    styles: [`    
    .well div { color: red;}
`] 
})
export class EventListComponent implements OnInit{
    events:any
    constructor(private eventService: EventService){

    }
    
    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
    
handleEventClicked(data){
    console.log('received: ',  data)
}
}

