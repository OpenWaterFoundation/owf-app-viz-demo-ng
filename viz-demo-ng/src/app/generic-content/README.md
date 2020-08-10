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

#### Markdown tables not formatted correctly:

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



## Showdown Options:

As noted from the previous explanations, in order to change Showdown default behavior the use of options may be necessary. These options can be set globally or locally. The provided options are disabled by default and will require set up. The following options may also be found on [Showdown's documentation](https://github.com/showdownjs/showdown).

## Available options: 

## omitExtraWLInCodeBlocks

| type    | default | since | description                               |
| ------- | ------- | ----- | ----------------------------------------- |
| boolean | false   | 1.0.0 | Omit the trailing newline in a code block |

By default, showdown adds a newline before the closing tags in code blocks. By enabling this option, that newline is removed.
This option affects both indented and fenced (gfm style) code blocks.

### Example:

**input**:

```
    var foo = 'bar';
```

**omitExtraWLInCodeBlocks** = false:

```
<code><pre>var foo = 'bar';
</pre></code>
```

**omitExtraWLInCodeBlocks** = true:

```
<code><pre>var foo = 'bar';</pre></code>
```

## noHeaderId

| type    | default | since | description                                    |
| ------- | ------- | ----- | ---------------------------------------------- |
| boolean | false   | 1.1.0 | Disable the automatic generation of header ids |

Showdown generates an id for headings automatically. This is useful for linking to a specific header. This behavior, however, can be disabled with this option.

### Example

**input**:

```
# This is a header
```

**noHeaderId** = false

```
<h1 id="thisisaheader">This is a header</h1>
```

**noHeaderId** = true

```
<h1>This is a header</h1>
```

NOTE: Setting to true overrides **[prefixHeaderId](https://github.com/showdownjs/showdown/wiki/Showdown-options#prefixheaderid)** and **[ghCompatibleHeaderId](https://github.com/showdownjs/showdown/wiki/Showdown-options#ghcompatibleheaderid)** options

## ghCompatibleHeaderId

| type    | default | since | description                                      |
| ------- | ------- | ----- | ------------------------------------------------ |
| boolean | false   | 1.5.5 | Generate header ids compatible with github style |

This changes the format of the generated header IDs: spaces are replaced with dashes and a bunch of non alphanumeric chars are removed.

### Example

**input**:

```
# This is a header with @#$%
```

**ghCompatibleHeaderId** = false

```
<h1 id="thisisaheader">This is a header</h1>
```

**ghCompatibleHeaderId** = true

```
<h1 id="this-is-a-header-with-">This is a header with @#$%</h1>
```

## prefixHeaderId

| type              | default | since | description                              |
| ----------------- | ------- | ----- | ---------------------------------------- |
| string \| boolean |         | 1.0.0 | Add a prefix to the generated header ids |

Adds a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to `true` will add a generic 'section' prefix.

## headerLevelStart

| type    | default | since | description                   |
| ------- | ------- | ----- | ----------------------------- |
| integer | 1       | 1.1.0 | Set the header starting level |

Sets the level from which header tags should start

**input**:

```
# header
```

**headerLevelStart** = 1

```
<h1>header</h1>
```

**headerLevelStart** = 3

```
<h3>header</h3>
```

## parseImgDimensions

| type    | default | since | description                                                  |
| ------- | ------- | ----- | ------------------------------------------------------------ |
| boolean | false   | 1.1.0 | Enable support for setting image dimensions from within markdown syntax |

Enables support for setting image dimensions from within markdown syntax.

```
![foo](foo.jpg =100x80)   simple, assumes units are in px
![bar](bar.jpg =100x*)    sets the height to "auto"
![baz](baz.jpg =80%x5em)  Image with width of 80% and height of 5em
```

## simplifiedAutoLink

| type    | default | since | description                                 |
| ------- | ------- | ----- | ------------------------------------------- |
| boolean | false   | 1.2.0 | Enable automatic linking in plain text urls |

Turning this option on will enable automatic linking when the parser find plain text urls

**input**:

```
some text www.google.com
```

**simplifiedAutoLink** = false

```
<p>some text www.google.com</p>
```

**simplifiedAutoLink** = true

```
<p>some text <a href="www.google.com">www.google.com</a></p>
```

## excludeTrailingPunctuationFromURLs

| type    | default | since | description                                        |
| ------- | ------- | ----- | -------------------------------------------------- |
| boolean | false   | 1.5.1 | Excludes trailing punctuation from autolinked urls |

Excludes the follow characters from links: `. ! ? ( )` This option only applies to links generated by **[simplifiedAutoLink](https://github.com/showdownjs/showdown/wiki/Showdown-options#simplifiedautolink)**.

**input**:

```
   check this link www.google.com.
```

**excludeTrailingPunctuationFromURLs** = false

```
<p>check this link <a href="www.google.com">www.google.com.</a></p>
```

**excludeTrailingPunctuationFromURLs** = true

```
<p>check this link <a href="www.google.com">www.google.com</a>.</p>
```

## literalMidWordUnderscores

| type    | default | since | description                                                 |
| ------- | ------- | ----- | ----------------------------------------------------------- |
| boolean | false   | 1.2.0 | Treats underscores in middle of words as literal characters |

Underscores are *magic characters* in markdown (as they delimit words that should be emphasised). Turning this on will stop showdown from interpreting underscores in the middle of words as `` and `` and instead treat them as literal underscores.

**input**:

```
some text with__underscores__in middle
```

**literalMidWordUnderscores** = false

```
<p>some text with<strong>underscores</strong>in middle</p>
```

**literalMidWordUnderscores** = true

```
<p>some text with__underscores__in middle</p>
```

## strikethrough

| type    | default | since | description                             |
| ------- | ------- | ----- | --------------------------------------- |
| boolean | false   | 1.2.0 | Enable support for strikethrough syntax |

Enables support for strikethrough (`~~`~~)

**syntax**:

```
~~strikethrough~~
<del>strikethrough</del>
```

## tables

| type    | default | since | description                      |
| ------- | ------- | ----- | -------------------------------- |
| boolean | false   | 1.2.0 | Enable support for tables syntax |

Enables support for table syntax.

**syntax**:

```
| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |
```

## tablesHeaderId:

| type    | default | since | description                                      |
| ------- | ------- | ----- | ------------------------------------------------ |
| boolean | false   | 1.2.0 | Enable automatic generation of table headers ids |

If enabled, generates automatic ids for table headers. Only applies if **[tables](https://github.com/showdownjs/showdown/wiki/Showdown-options#tables)** is enabled.

## ghCodeBlocks

| type    | default | since | description                                                  |
| ------- | ------- | ----- | ------------------------------------------------------------ |
| boolean | true    | 1.2.0 | Enable support for GFM code block style syntax (fenced codeblocks) |

**syntax**:

```
​```
	some code here
	```
```

NOTE: ghCodeBlocks are enabled by default since version 0.3.1

## tasklists**:(boolean) [default false] Enable support for GFM takslists. Example:

| type    | default | since | description                      |
| ------- | ------- | ----- | -------------------------------- |
| boolean | false   | 1.2.0 | Enable support for GFM takslists |

Enables support for github style tasklists

**syntax**:

```
 - [x] This task is done
 - [ ] This is still pending
```

## ghMentions

| type    | default | since | description                         |
| ------- | ------- | ----- | ----------------------------------- |
| boolean | false   | 1.6.0 | Enable support for github @mentions |

Enables support for github @mentions, which links to the github profile page of the username mentioned

**input**:

```
hello there @tivie
```

**ghMentions** = false

```
<p>hello there @tivie</p>
```

**ghMentions** = true

```
<p>hello there <a href="https://www.github.com/tivie>@tivie</a></p>
```

## ghMentionsLink

| type    | default                  | since | description                        |
| ------- | ------------------------ | ----- | ---------------------------------- |
| boolean | `https://github.com/{u}` | 1.6.2 | Set link @mentions should point to |

Changes the link generated by @mentions. `{u}` is replaced by the text of the mentions. Only applies if **[ghMentions](https://github.com/showdownjs/showdown/wiki/Showdown-options#ghmentions)** is enabled.

**input**:

```
hello there @tivie
```

**ghMentionsLink** = https://github.com/{u}

```
<p>hello there <a href="https://www.github.com/tivie>@tivie</a></p>
```

**ghMentionsLink** = http://mysite.com/{u}/profile

```
<p>hello there <a href="//mysite.com/tivie/profile">@tivie</a></p>
```

## smoothLivePreview

| type    | default | since | description                                       |
| ------- | ------- | ----- | ------------------------------------------------- |
| boolean | false   | 1.2.1 | Fix weird effects due to parsing incomplete input |

On some circumstances, in live preview editors, when a paragraph is followed by a list it can cause an awkward effect.

![awkward effect](https://camo.githubusercontent.com/f6b18087c0f5cb3364582f0b9019f44eb9a0739e/687474703a2f2f692e696d6775722e636f6d2f5951396948544c2e676966254532253830253842)

You can prevent this by enabling this option

## smartIndentationFix

| type    | default | since | description                                                  |
| ------- | ------- | ----- | ------------------------------------------------------------ |
| boolean | false   | 1.4.2 | Fix indentation problems related to es6 template strings in the midst of indented code |

Tries to smartly fix indentation problems related to es6 template strings in the midst of indented code

## disableForced4SpacesIndentedSublists

| type    | default | since | description                                                  |
| ------- | ------- | ----- | ------------------------------------------------------------ |
| boolean | false   | 1.5.0 | Disable the requirement of indenting sublists by 4 spaces for them to be nested |

Disables the requirement of indenting sublists by 4 spaces for them to be nested, effectively reverting to the old behavior where 2 or 3 spaces were enough.

**input**:

```
- one
  - two

...

- one
    - two
```

**disableForced4SpacesIndentedSublists** = false

```
<ul>
<li>one</li>
<li>two</li>
</ul>
<p>...</p>
<ul>
<li>one
	<ul>
		<li>two</li>
	</ul>
</li>
</ul>
```

**disableForced4SpacesIndentedSublists** = true

```
<ul>
<li>one
	<ul>
		<li>two</li>
	</ul>
</li>
</ul>
<p>...</p>
<ul>
<li>one
	<ul>
		<li>two</li>
	</ul>
</li>
</ul>
```

## simpleLineBreaks

| type    | default | since | description                                               |
| ------- | ------- | ----- | --------------------------------------------------------- |
| boolean | false   | 1.5.1 | Parse line breaks as ` ` in paragraphs (like GitHub does) |

Every newline character inside paragraphs and spans is parsed as ` `

**input**:

```
a line
wrapped in two
```

**simpleLineBreaks** = false

```
<p>a line
wrapped in two</p>
```

**simpleLineBreaks** = true

```
<p>a line<br>
wrapped in two</p>
```

## requireSpaceBeforeHeadingText

| type    | default | since | description                                  |
| ------- | ------- | ----- | -------------------------------------------- |
| boolean | false   | 1.5.3 | Require a spance between `#` and header text |

Makes adding a space between `#` and the header text mandatory.

**input**:

```
#header
```

**requireSpaceBeforeHeadingText** = false

```
<h1 id="header">header</h1>
```

**simpleLineBreaks** = true

```
<p>#header</p>
```

## encodeEmails

| type    | default | since | description                                 |
| ------- | ------- | ----- | ------------------------------------------- |
| boolean | true    | 1.6.1 | Enable e-mail address automatic obfuscation |

Enables e-mail addresses encoding through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities. (since v1.6.1)

NOTE: Prior to version 1.6.1, emails would always be obfuscated through dec and hex encoding.

**input**:

```
<myself@example.com>
```

**encodeEmails** = false

```
<a href="mailto:myself@example.com">myself@example.com</a>
```

**encodeEmails** = true

```
<a href="&#109;&#97;&#105;&#108;t&#x6f;&#x3a;&#109;&#x79;s&#x65;&#x6c;&#102;&#64;&#x65;xa&#109;&#112;&#108;&#101;&#x2e;c&#x6f;&#109;">&#x6d;&#121;s&#101;&#108;f&#x40;&#x65;&#120;a&#x6d;&#x70;&#108;&#x65;&#x2e;&#99;&#x6f;&#109;</a>
```

