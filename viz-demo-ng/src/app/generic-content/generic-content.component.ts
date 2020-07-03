import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.css']
})
export class GenericContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'link-content',
  templateUrl: './link-content.html',
  styleUrls: ['./link-content.css']
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
