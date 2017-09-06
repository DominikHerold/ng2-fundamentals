import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventListComponent{
event = {
    id: 1,
    name: 'MyEvent',
    cost: 567.89
}
}