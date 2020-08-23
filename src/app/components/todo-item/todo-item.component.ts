import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/models/Todo';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo; // defined in todo.component.html []
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //set Dynamic Classes

  setClasses(){
    let classes = {
      todo:true, //todo and is-completed is class defined in css file ,if - coat with ''
      'is-complete':this.todo.completed
    }

    return classes;
  }

  onToggle(todo){

    //Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toogleCompleted(todo).subscribe(todo => 
      console.log(todo));
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
  }
}
