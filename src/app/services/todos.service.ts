import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http=inject(HttpClient);
  todoItems: Array<Todo> = [
    {
      title: 'groceries',
      completed: false,
      userId: 1,
      id: 0,
    },
    {
      title: 'car wash',
      completed: false,
      userId: 1,
  id:0,
}]
getTodosFromApi()
{
  const url='https://jsonplaceholder.typicode.com/todos';
  return this.http.get<Array<Todo>>(url);

}
  constructor() { }
}
