# cz-conventional-changelog

[![npm version](https://img.shields.io/npm/v/@slavab89/cz-conventional-changelog.svg?style=flat-square)](https://www.npmjs.org/package/cz-conventional-changelog)
[![npm downloads](https://img.shields.io/npm/dm/@slavab89/cz-conventional-changelog.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog&from=2015-08-01)

Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/stevemao/conventional-changelog-angular/blob/master/index.js) standard.

The only change from the original package is that i place the ISSUES section at the `head` part instead of the footer.

When using Bitbucket it allows JIRA issues to be auto-highlighted.

The resulting commit message should look something like:
```
feat(adapter): ABC-123 This is my message

This is the body of the commit

BREAKING CHANGE: Something that breaks!
```
