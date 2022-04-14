const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      isTest
        ? {
            corejs: '2',
            useBuiltIns: 'usage'
          }
        : {}
    ]
  ]
}
