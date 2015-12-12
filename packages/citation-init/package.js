Package.describe({
  name: 'rebolon:citation-init',
  summary: 'Init only by an app having a server side',
  version: '0.0.1',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['ecmascript', 'mongo', 'rebolon:citation-collections'], ['server']);

  api.addFiles(['init.js'], ['server']);
});
