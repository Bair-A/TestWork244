module.exports = {
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  semi: true,
  trailingComma: 'none',
  endOfLine: 'lf',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^react$',
    '^next',
    '^next/navigation',
    '<THIRD_PARTY_MODULES>',
    '^@/app',
    '^@/widgets',
    '^@/features',
    '^@/entities',
    '^@/shared',
    '^([.][.]\\/){1,2}[\\w\\/]+([.](\\w+))?$',
    '^[.]/[\\w/]+([.](\\w+))?$'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
