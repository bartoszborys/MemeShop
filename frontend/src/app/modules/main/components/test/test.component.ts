import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit, OnChanges {
  @Input() data: Person;

  constructor() { }

  ngOnChanges(){
    console.log(`In ${this.data.name}`)
  }

  ngOnInit() {
  }

}
