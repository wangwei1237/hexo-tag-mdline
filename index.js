/**
* hexo-tag-mdline
* https://github.com/wangwei1237/hexo-tag-mdline.git
* Copyright (c) 2021, wangwei1237
* Licensed under the MIT license.

* Syntax:
* {% mdline %}
* ## {year}: {title}
* {content}
* {% endmdline%}
*/

var mdline    = require("mdline");
var parser    = require("@mdline/mdline-parser");
var formatter = require("@mdline/mdline-formatter-html");

hexo.extend.tag.register('mdline', mdlineMaps, {
  async: true,
  ends: true
});

async function mdlineMaps(args, content) {
  var styleResult = "";
  var contentResult = "";

  if (content.length) {
    await mdline.processText(content, {
      parser: parser,
      formatter: formatter
    })
    .then(function (result) {
        styleResult = result.match(/<style>.*<\/style>/s)[0];
        contentResult = result.match(/<section.*<\/section>/s)[0];
    });
  }

  return styleResult + '\n' + contentResult;
}