# Showdown: ngx-showdown

**ngx-showdown** is an Angular integration of [Showdown](http://showdownjs.com/). Showdown is a JavaScript Markdown to HTML converter, based on the original works by John Gruber. Showdown can be used client side (in the browser) or server side (with NodeJs).

### Angular Showdown Demonstration Overview



#### Installation

To begin using Showdown within an Angular Application perform the following:

* ```$ npm install ngx-showdown --save```

Next install the needed peer dependencies (``@angular/common/http`` for ``SourceDirective``)

* ``$ npm install showdown @angular/common @angular/platform-browser --save``

And finally install type package of ``Showdown`` for ``TypeScript``

* ``$ npm install @types/showdown --save-dev``



#### Utilizing Showdown in Angular

To begin using Showdown, First add ```ShowdownModule``` to the ```imports``` of the App 

______________________

```
import { NgModule } from '@angular/core';
import { ShowdownModule } from 'ngx-showdown';
 
@NgModule({
  imports: [ ShowdownModule ]
})
export class AppModule {}
```

__________________



Once this has been done simply use a Showdown tag within the componenet

```
	<showdown> <showdown>
```



This visualization application utilizes Showdown for all of the readable content of pages using the following syntax:

```
	<showdown src='assets/app-content/content-pages/showdon.md'></showdown>
```

This example displays the 'Showdown' page content.