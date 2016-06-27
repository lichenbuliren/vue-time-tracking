module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // 允许使用 window.alert
    'no-alert': 0,
    // 结尾逗号，分割。
    'comma-dangle': [2, 'never'],
    // 允许对函数参数重新赋值
    'no-param-reassign': ["error", { "props": false }],
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
