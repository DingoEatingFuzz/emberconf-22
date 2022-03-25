import Mirage from 'ember-cli-mirage';
import { DateTime } from 'luxon';

export default Mirage.Factory.extend({
  succeeded: true,
  statusMessage: '',
  testsRunAt: () => new DateTime.utc(),
  canary: false,
  output: '',
});
