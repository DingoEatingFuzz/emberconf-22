import ApplicationSerializer from './application';

export default class ReviewSerializer extends ApplicationSerializer {
  attrs = {
    createdAt: { serialize: false },
  };
}
