import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Events</h1>
        <hr/>
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>ID: {{event.id}}</div>
        </div>        
    </div>
    `
})
export class EventListComponent{
event = {
    id: 1,
    name: 'MyEvent'
}
}