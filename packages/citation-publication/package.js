Package.describe({
  name: 'rebolon:citation-publication',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Publication of data for mainly all apps',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'underscore', 'reactive-dict', 'tracker', 'rebolon:citation-collections']);
  api.addFiles('publish.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rebolon:citation-publication');
  api.addFiles('tests/publish.js');
});
