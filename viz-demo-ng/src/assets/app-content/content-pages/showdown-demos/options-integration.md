# Paragraph Breaking 

It may be observed that that separate lines within the Markdown source are being treated as separate paragraphs, resulting in  HTML  with partial lines that break prematurely.

The solution for this is to **disable the option ``simpleLineBreaks``**.

To **set this option locally** to a specific file, add the options attribute to the respected Showdown element tag:

```
<showdown [options]="{simpleLineBreaks: false}">
    * a
    * b
    * c
</showdown>
```

To **set this option globally** to all files, specify the option in ``app.module.ts``: 

```
 ShowdownModule.forRoot({noHeaderId: true, openLinksInNewWindow: true, smartIndentationFix: true, simpleLineBreaks: false, flavor: 'github'}),
```



By default, Showdown does not behave in this way. However when using GFM flavor, ``simpleLineBreakes`` gets activated, and so deactivation is required. 



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









