import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html',
    styles: [`    
    .well div { color: red;}
`] 
})
export class EventListComponent{
event = {
    id: 1,
    name: 'MyEvent',
    cost: 567.89
}
handleEventClicked(data){
    console.log('received: ',  data)
}
}

