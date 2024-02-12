import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';

const engines = {
  'engine-routing': {
    dependencies: {
      services: [{ 'host-router': 'router' }],
    },
  },
};

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  engines = engines;
}

loadInitializers(App, config.modulePrefix);
