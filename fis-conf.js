fis.match('*.ts', {
  parser: fis.plugin('typescript', {
    sourceMap: true, // 输出 sourcemap, 便于调试。
  }),
  rExt: '.js',
  isMod: true
});

// 纯前端项目，用 loader 来加载资源。
fis.match('::package', {
  postpackager: fis.plugin('loader', {
    useInlineMap: true // 内嵌的方式生成 System.config
  })
});

fis.unhook('components');
fis.hook('node_modules');
fis.hook('commonjs', {
});

fis.match('/node_modules/**.js', {
  isMod: true
});

fis.set('project.files', '*.html');
