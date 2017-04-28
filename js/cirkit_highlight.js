hljs.registerLanguage("cirkit", function(hljs) {
  return {
    keywords: 'cirkit',
    contains: [
      {
        className: 'command',
        begin: '^(cirkit|abc \\d+)> ',
        excludeBegin: true,
        end: ' |$',
        excludeEnd: true
      }
    ]
  }
});
console.log(hljs.listLanguages());
hljs.initHighlightingOnLoad();
