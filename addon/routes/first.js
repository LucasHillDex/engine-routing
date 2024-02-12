import Route from '@ember/routing/route';
import { inject } from '@ember/service';
export default class First extends Route {
  @inject hostRouter;

  beforeModel() {
    // Works on Ember 4.x but fails on Ember 5.x due to removal of transition APIs in routes/controllers
    // this.transitionTo('second');

    // Fails with Assertion Failed: The route second was not found Error: Assertion Failed: The route second was not found
    // this.hostRouter.transitionTo('second');

    // Works but breaks the engine encapsulation as you need to understand how the engine is mounted in its parent
    this.hostRouter.transitionTo('engine-demo.second');
  }
}
