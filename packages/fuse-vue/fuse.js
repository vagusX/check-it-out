const { FuseBox, BabelPlugin, WebIndexPlugin } = require('fuse-box')

const fuse = FuseBox.init({
  sourceMaps: true,
  homeDir: './src',
  output: 'dist/$name.js',
  plugins: [
    BabelPlugin({
      config: {
        presets: ['latest'],
        plugins: ['jsx-v-model', 'transform-vue-jsx']
      }
    }),
    WebIndexPlugin({ template: './index.html' })
  ]
})

fuse.dev()
fuse.bundle('app.js').instructions('>index.ts').watch()
fuse.run()
