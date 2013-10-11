var site = require('apostrophe-site')({

  // This line is required and allows apostrophe-site to use require() and manage our NPM modules for us.
  root: module,
  shortName: 'apostrophe-sandbox',
  hostName: 'apostrophe-sandbox',
  title: 'Junto',
  sessionSecret: 'junto is a party',
  adminPassword: 'punk1168',


  // Here we define what page templates we have and what they will be called in the Page Types menu.

  // For html templates, the 'name' property refers to the filename in ./views/pages, e.g. 'default'
  // refers to '/views/pages/default.html'.

  // The name property can also refer to a module, in the case of 'blog', 'map', 'events', etc.

  pages: {
    types: [
      { name: 'default', label: 'Default (Two Column)' },
      { name: 'onecolumn', label: 'One Column' },
      { name: 'events', label: 'Events' },
      { name: 'home', label: 'Home Page' },
      { name: 'blog', label: 'Blog' },
      { name: 'sections', label: 'Sections' }
    ]
  },

  // These are the modules we want to bring into the project.
  modules: {
    'apostrophe-blog':     { },
    'apostrophe-events':   { },
    'apostrophe-sections': { }
  },

  // These are assets we want to push to the browser.
  // The scripts array contains the names of JS files in /public/js,
  // while stylesheets contains the names of LESS files in /public/css
  assets: {
    scripts: ['site'],
    stylesheets: ['site']
  }
});
