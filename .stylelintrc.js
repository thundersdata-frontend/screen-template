module.exports = {
  // Umi Max 项目
  extends: require.resolve('@umijs/max/stylelint'),
  rules: {
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['/flex/'],
      },
    ],
    'function-no-unknown': null,
  },
};
