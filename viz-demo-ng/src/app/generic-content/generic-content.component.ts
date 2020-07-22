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
@Component({
  selector: 'showdown-content',
  templateUrl: './showdown-content.html',
  styleUrls: ['./link-content.css']
  
})
export class NGXShowdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text: string = `
   # Showdown Tutorial
  

  This is a showdown tutorial. 
  
  Showdown supports a number of cool features, namely:
  
    - headers 
    - lists
    - and other stuff too
    
  It is also possible to include code:
  
      var foo = 'bar';
      
      var baz = {
        markdown: 'is great',
        showdown: 'is awesome'
      }
  
  Don't forget to check the [extensions wiki][1].
  
  [1]: https://github.com/showdownjs/showdown/wiki/extensions`;

  // function run() {
  //   var text = document.getElementById('sourceTA').value,
  //       target = document.getElementById('targetDiv')
  // }
}
