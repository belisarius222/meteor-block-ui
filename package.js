Package.describe({
  summary: "Block, a jquery plugin for blocking the UI with a loading screen, repackaged for meteor"
});

Package.on_use(function (api, where) {
  where = 'client';
  api.use('jquery', where);
  api.add_files('jquery.blockUI.js', where);
});
