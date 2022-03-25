import Mirage from 'ember-cli-mirage';
import { DateTime } from 'luxon';

export default Mirage.Factory.extend({
  succeeded: true,
  errorMessage: '',
  createdAt: () => new DateTime.utc(),
  output: () => '[]',
});
