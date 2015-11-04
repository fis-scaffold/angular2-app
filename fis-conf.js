
fis.hook('system');

fis.match('*.d.ts', {
  release: false
});

fis.match('*.ts', {
  parser: fis.plugin('typescript'),
  rExt: '.js',
  isMod: true
});

fis.match('angular2.dev.js', {
  isMod: false
});

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    useInlineMap: true
  })
});
