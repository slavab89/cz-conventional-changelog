# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.1.1"></a>
## [2.1.1](https://github.com/slavab89/cz-conventional-changelog/compare/v2.1.0...v2.1.1) (2017-12-27)


### Bug Fixes

* Fix issues beeing set as undefined instead of empty string ([5bf9338](https://github.com/slavab89/cz-conventional-changelog/commit/5bf9338))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/slavab89/cz-conventional-changelog/compare/v2.0.0...v2.1.0) (2017-12-25)


### Bug Fixes

* Fix extra added space ([186602c](https://github.com/slavab89/cz-conventional-changelog/commit/186602c))


### Features

* **engine:** Place issues at the head part ([6aa6366](https://github.com/slavab89/cz-conventional-changelog/commit/6aa6366))
* **prompt:** add confirmation fields + edit for clarity ([#58](https://github.com/slavab89/cz-conventional-changelog/issues/58)) ([d40ac2c](https://github.com/slavab89/cz-conventional-changelog/commit/d40ac2c)), closes [#52](https://github.com/slavab89/cz-conventional-changelog/issues/52)


### BREAKING CHANGES

* **prompt:** and issues now have confirm fields to ensure answers like "no" and "n/a" don’t
accidentally create breaking changes. Updated language around scopes to be less confusing for
non-Angular devs. Added examples for issue references/closing.
