import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  topicForm = new FormGroup({
    topics : new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {
  }

  addTopic(topic : HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';

  }

  removeTopic(topic: AbstractControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.topicForm.get('topics') as FormArray;
  }

}
