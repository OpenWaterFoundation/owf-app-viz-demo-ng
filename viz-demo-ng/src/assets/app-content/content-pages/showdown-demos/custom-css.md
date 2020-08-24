# Showdown-Custom CSS

Since Showdown generates plain html, one can make style changes using CSS

```
h1 {
  color: red;
}
```

Additionally changes can also be made directly within the markdown source using a ``<style>`` tag:

```
<style>
h1 {
  color: red;
}
</style>

# this is an heading
```

Doing so however may alter more than just the markdown generated html elements, and can interfere with styling libraries such as Bootstrap.  In order to have control over Showdown specific elements, an extension will be needed that creates this new syntax.

As a result adding default classes for each Showdown generated HTML element is necessary. This requires the use of an extension and can be found within [Showdown's Documentation](https://github.com/showdownjs/showdown/wiki/Add-default-classes-for-each-HTML-element).

### Extensions

In order to add additional functionality Showdown makes use of [extensions](https://github.com/showdownjs/showdown/wiki/Extensions). A showdown extension is simply a function which returns an array of language or output. 

There are [known extensions](https://github.com/showdownjs/showdown/wiki#list-of-known-extensions) provided by Showdown but one can also create their own if needed. 

### Creating an Extension: Default Classes for Custom CSS 

For custom CSS, adding a default classes with for each HTML element can be done with an extension. 

A lot of people use css ui kits like bootstrap, semantic-ui and require default class names for html elements.

```
<h1 class="showdown_h1">1st Heading</h1>
<h2 class="showdown_h2">2nd Heading</h2>
<ul class="showdown_ul">
  <li class="showdown_li">first item</li>
  <li class="showdown_li">second item</li>
</ul>
```

Showdown does not support this out of the box. But you can create an extension to accomplish this:

```
const showdown = require('showdown');

const classMap = {
  h1: 'showdown_h1',
  h2: 'showdown_h2',
  ul: 'showdown_ul',
  li: 'showdown_li'
}

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classMap[key]}" $1>`
  }));

const conv = new showdown.Converter({
  extensions: [...bindings]
});
```

After incorporating these classes, changing CSS can be specific to Showdown generated elements with these default class names:

```
.showdown_table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    display: block;
  }
  
  .showdown_td, .showdown_th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  .showdown_tr:nth-child(even) {
    background-color: #dddddd;
  }

  
.showdown_h1 {
  font-weight: bold;
  color: #cc0099;
  font-size: 62px;
}

.showdown_h2 {
  font-weight: bold;
  color: #3399ff;
  font-size: 24px;
}
```



Credits for this extension go to [@zusamann](https://github.com/zusamann) (original issue can be [consulted here](https://github.com/showdownjs/showdown/issues/376)).

Updated by [@Kameelridder](https://github.com/Kameelridder) (original issue can be [consulted here](https://github.com/showdownjs/showdown/issues/509))

### Adding External CSS

Creating a separate CSS file to be used for the styling of Showdown Elements makes sense and provides organization when customizing applications. Doing so requires adding external CSS. To do this:

**Place all CSS in ``assets/css`` folder as such:**

```
assets/css/style1.css
assets/css/style2.css
assets/css/style3.css
```

**Following this, import the stylesheet's reference in the global style.css:**

```
@import 'assets/css/style1.css';
@import 'assets/css/style2.css';
@import 'assets/css/styel3.css';
```

