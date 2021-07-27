# hexo-tag-mdline
Transfer the markdown content to timeline style in Hexo posts/pages.

# About
> This is a [Hexo](http://hexo.io/) tag plugin for transfering the markdown content to timeline style in posts/pages

## Installation
```bash
npm install --save hexo-tag-mdline
```
## Usage
The full tag format is as follows:
```bash
{% mdline %}
## {{Date}}: TITLE

MARKDOWN BODY

## {{Date}}--{{Date}}: TITLE

MARKDOWN BODY
{% endmdline %}
```
example:
```bash
{% mdline %}
## 1997-06: ECMAScript 1

First edition.

## 1998-06: ECMAScript 2

Editorial changes to keep the specification fully aligned with ISO/IEC 16262 international standard.

## 1999-12: ECMAScript 3

Added regular expressions, better string handling, new control statements, try/catch exception handling, tighter definition of errors, formatting for numeric output and other enhancements.

## 2000-01--2007-10-23: [Abandoned] ECMAScript 4

Fourth Edition was abandoned, due to political differences concerning language complexity. Many features proposed for the Fourth Edition have been completely dropped; some were incorporated into the sixth edition.
{% endmdline %}
```

And it looks like the following style:
![](https://raw.githubusercontent.com/azu/mdline/master/docs/resources/ecmascript-timeline.png)


## License
Copyright (c) 2021, Wei Wang. Licensed under the [MIT license](LICENSE).