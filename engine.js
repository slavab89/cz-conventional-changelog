const wrap = require('word-wrap');
const map = require('lodash.map');
const padEnd = require('lodash.padend');
const longest = require('longest');

module.exports = function engine(options) {
  const types = options.types;

  const length = longest(Object.keys(types)).length + 1;
  const choices = map(types, (type, key) => {
    return {
      name: `${padEnd(`${key}:`, length)} ${type.description}`,
      value: key
    };
  });

  return {
    prompter: function(cz, commit) {
      console.log('\nLine 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.\n');

      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message: 'Select the type of change that you\'re committing:',
          choices: choices
        }, {
          type: 'input',
          name: 'scope',
          message: 'Denote the scope of this change ($location, $browser, $compile, etc.):\n'
        }, {
          type: 'input',
          name: 'subject',
          message: 'Write a short, imperative tense description of the change:\n'
        }, {
          type: 'input',
          name: 'body',
          message: 'Provide a longer description of the change: (Optional)\n'
        }, {
          type: 'input',
          name: 'breaking',
          message: 'List any breaking changes: (Optional)\n'
        }, {
          type: 'input',
          name: 'issues',
          message: 'List any issues closed by this change:\n'
        }
      ]).then(function(answers) {
        const maxLineWidth = 100;
        const wrapOptions = {
          trim: true,
          newline: '\n',
          indent:'',
          width: maxLineWidth
        };

        // parentheses are only needed when a scope is present
        let scope = answers.scope.trim();
        scope = scope ? `(${answers.scope.trim()})` : '';

        const issues = wrap(answers.issues, wrapOptions);

        // Hard limit this line
        const head = `${answers.type}${scope}: ${issues} ${answers.subject.trim()}`.slice(0, maxLineWidth);

        // Wrap these lines at 100 characters
        const body = wrap(answers.body, wrapOptions);

        // Apply breaking change prefix, removing it if already present
        let breaking = answers.breaking.trim();
        breaking = breaking ? `BREAKING CHANGE: ${breaking.replace(/^BREAKING CHANGE: /, '')}` : '';
        breaking = wrap(breaking, wrapOptions);

        const footer = breaking || '';

        commit(`${head}\n\n${body}\n\n${footer}`);
      });
    }
  };
};
