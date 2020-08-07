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
  imports: [ShowdownModule.forRoot({emoji: true, noHeaderId: true, openLinksInNewWindow: true, flavor: 'github'})  ]
})
export class AppModule {}
```

__________________

Options explanation: 

- **noHeaderId**: (boolean) [default false] Disable the automatic generation of header ids. Setting to true overrides **prefixHeaderId**
- **emoji**: (boolean) [default false] Enable emoji support. Ex: `this is a :smile: emoji` For more info on available emojis, see https://github.com/showdownjs/showdown/wiki/Emojis **(since v.1.8.0)**
- **openLinksInNewWindow**: (boolean) [default false] Open all links in new windows (by adding the attribute `target="_blank"` to `` tags) **(since v1.7.0)**
- **flavor: 'github'** : Flavors or presets, set the correct options automatically so that showdown behaves like popular Markdown flavors. Current flavors available include:
  - original - original markdown flavor as in [John Gruber's spec](https://daringfireball.net/projects/markdown/)
  - vanilla - showdown base flavor (as from v1.3.1)
  - github - GFM (GitHub Flavored Markdown)



Once this has been done simply use a Showdown tag within the component

```
	<showdown> <showdown>
```



This visualization application utilizes Showdown for all of the readable content of pages using the following syntax:

```
	<showdown src='assets/app-content/content-pages/showdon.md'></showdown>
```

This example displays the 'Showdown' page content.



## Troubleshoot



## Tables

#### Markdown tables not formatted correctly:**

It may be that a simple markdown table appears unformatted altogether as such:

``` 
| a | b | c | | ----- | :---: | ----: | | 123 | 456 | 789 | | ABC | DEF | GHI |
```

A solution for this consists of importing Showdown with certain options configured.
`imports: [ ShowdownModule.forRoot({emoji: true, noHeaderId: true, flavor: 'github'}) ]`

The **solution above does format markdown as a table but renders without style**. No styling is applied by default with Showdown so that it doesn't interfere with other styling libraries such as Bootstrap.

Because Showdown generates simple HTML, the best practices for styling appearances will be through CSS. The generated Markdown can be wrapped with an id and style.

The style can also be specified by incorporating straight into the Markdown file using a `` tag.
The following CSS can be placed within the markdown source or within respected css file to resolve table formatting.

```
<style> 
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    display: block;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #ededed
  }
</style>
```

In order to control of specific elements, an extension is needed to create "new syntax" for the file.

Additionally to **format code blocks** as seen in Markdown, add the following CSS:

```
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
}
```

## Images

#### **Not able to support Markdown Images**

**Inline image syntax looks like this:**

```
![Alt text](url/to/image)

![Alt text](url/to/image "Optional title")
```

- An exclamation mark: !;
- followed by a set of square brackets, containing the alt attribute text for the image;
- followed by a set of parentheses, containing the URL or path to the image, and an optional title attribute enclosed in double or single quotes.

**Reference-style image syntax looks like this:**
`![Alt text][id]`

The 'id' is the name of the image reference:
`[id]: url/to/image "Optional title attribute"`

#### **Defining Image dimensions**

To define the image dimensions , the `parseImgDimension` must be activated within ``app.module:``
`ShowdownModule.forRoot({emoji: true, noHeaderId: true, parseImgDimensions: true, flavor: 'github'}),`

Then in the Markdown source have the image be specified as such:
`![Alt text](url/to/image =250x250 "Optional title")`

or in reference style:

```
![Alt text][id]

[id]: url/to/image =250x250`
```

#### **parseImgDimensions**: 

(boolean) [default false] Enable support for setting image dimensions from within markdown syntax. Examples:

```
![foo](foo.jpg =100x80)     simple, assumes units are in px
![bar](bar.jpg =100x*)      sets the height to "auto"
![baz](baz.jpg =80%x5em)  Image with width of 80% and height of 5em
```