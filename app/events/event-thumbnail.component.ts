import {Component, Input} from '@angular/core'

@Component({
    selector: 'events-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>ID: {{event.id}}</div>
        <div>Cost: {{event.cost}} $</div>
    </div> 
    `
})
export class EventThumbnailComponent{
    @Input() event:any
}