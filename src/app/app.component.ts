/*
component file, brige 'model' and 'template'
*/
import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";


//decorator: tells angular this is a component
@Component({
    selector: "todo-app",             //selector: match HTML element the component will appy
    templateUrl: "app.component.html" //template: specify compentnt template
})


export class AppComponent {
    model = new Model();

    getName() {
        return this.model.user;
    }

    //feature
    getTodoItems() {
        return this.model.items.filter(item => !item.done);
    }

    //feature
    addItem(newItem) {
        if (newItem != "") {
            this.model.items.push(new TodoItem(newItem, false));
        }
    }
}
