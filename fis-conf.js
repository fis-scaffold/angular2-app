
fis.hook('system');

fis.match('*.d.ts', {
  release: false
});

// 采用 system 模块化方案。
fis.hook('system', {

  // 忽略 angular2 的依赖。因为页面中已经手动引入了。
  ignoreDependencies: [
    'angular2/**',
  ]
});

fis.match('*.ts', {
  parser: fis.plugin('typescript', {
    sourceMap: true, // 输出 sourcemap, 便于调试。
    module: 2 // 让  ts 直接产出 amd 模块。
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

fis.match('/components/**.js', {
  isMod: true
})

// 这些文件太大了，不分析依赖信息了。
// 可以节省不少时间。
fis.match('/components/angular2/(**).js', {
  skipDepsAnalysis: true,
  isMod: false
});
