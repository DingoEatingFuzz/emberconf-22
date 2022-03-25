import ApplicationSerializer from './application';

export default class CategorySerializer extends ApplicationSerializer {
  attrs = {
    addonCount: { serialize: false },
  };

  normalize(modelClass, responseHash) {
    if (responseHash.relationships) {
      if (responseHash.relationships.parent.links) {
        delete responseHash.relationships.parent.links;
      }
      if (responseHash.relationships.subcategories.links) {
        delete responseHash.relationships.subcategories.links;
      }
    }
    return super.normalize(...arguments);
  }
}
