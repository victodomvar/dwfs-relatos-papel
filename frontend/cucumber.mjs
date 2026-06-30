export default {
  import: ['tests/bdd/step-definitions/**/*.js'],
  paths: ['tests/bdd/features/**/*.feature'],
  format: ['progress', 'html:test-results/cucumber-report.html'],
  publishQuiet: true,
};
