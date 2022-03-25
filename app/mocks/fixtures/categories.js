const data = {
  data: [
    {
      id: '1',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/1' },
      attributes: {
        name: 'Authentication',
        description: 'Addons for auth',
        position: 3,
        'addon-count': 43,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/1/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/1/subcategories',
          },
          data: [{ type: 'categories', id: '23' }],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/1/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/1/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/1/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/1/addons',
          },
        },
      },
    },
    {
      id: '2',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/2' },
      attributes: {
        name: 'Components',
        description: 'Addons that provide a component',
        position: 6,
        'addon-count': 285,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/2/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/2/subcategories',
          },
          data: [
            { type: 'categories', id: '38' },
            { type: 'categories', id: '14' },
            { type: 'categories', id: '15' },
            { type: 'categories', id: '17' },
            { type: 'categories', id: '18' },
            { type: 'categories', id: '19' },
            { type: 'categories', id: '20' },
            { type: 'categories', id: '16' },
            { type: 'categories', id: '28' },
            { type: 'categories', id: '30' },
            { type: 'categories', id: '31' },
            { type: 'categories', id: '32' },
            { type: 'categories', id: '33' },
            { type: 'categories', id: '34' },
            { type: 'categories', id: '35' },
            { type: 'categories', id: '36' },
            { type: 'categories', id: '37' },
            { type: 'categories', id: '41' },
            { type: 'categories', id: '42' },
            { type: 'categories', id: '43' },
            { type: 'categories', id: '44' },
            { type: 'categories', id: '45' },
            { type: 'categories', id: '46' },
            { type: 'categories', id: '47' },
            { type: 'categories', id: '48' },
            { type: 'categories', id: '69' },
          ],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/2/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/2/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/2/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/2/addons',
          },
        },
      },
    },
    {
      id: '3',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/3' },
      attributes: {
        name: 'Styles',
        description:
          'Addons that provide styles, css frameworks, preprocessors',
        position: 4,
        'addon-count': 131,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/3/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/3/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/3/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/3/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/3/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/3/addons',
          },
        },
      },
    },
    {
      id: '4',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/4' },
      attributes: {
        name: 'Testing',
        description: 'Addons related to testing',
        position: 5,
        'addon-count': 126,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/4/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/4/subcategories',
          },
          data: [
            { type: 'categories', id: '49' },
            { type: 'categories', id: '50' },
          ],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/4/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/4/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/4/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/4/addons',
          },
        },
      },
    },
    {
      id: '5',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/5' },
      attributes: {
        name: 'Build tools',
        description:
          'Addons related to preprocessing, broccoli plugins and dependencies of ember-cli',
        position: 7,
        'addon-count': 219,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/5/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/5/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/5/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/5/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/5/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/5/addons',
          },
        },
      },
    },
    {
      id: '6',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/6' },
      attributes: {
        name: 'Data',
        description:
          'Addons related to ember-data or alternatives to ember-data',
        position: 8,
        'addon-count': 84,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/6/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/6/subcategories',
          },
          data: [
            { type: 'categories', id: '24' },
            { type: 'categories', id: '25' },
          ],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/6/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/6/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/6/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/6/addons',
          },
        },
      },
    },
    {
      id: '7',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/7' },
      attributes: {
        name: 'Library wrappers',
        description:
          'Addons that wrap third party libraries, jQuery plugins and the like',
        position: 10,
        'addon-count': 554,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/7/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/7/subcategories',
          },
          data: [{ type: 'categories', id: '72' }],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/7/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/7/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/7/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/7/addons',
          },
        },
      },
    },
    {
      id: '8',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/8' },
      attributes: {
        name: 'Miscellaneous',
        description: "The addons that don't fit into other categories",
        position: 11,
        'addon-count': 497,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/8/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/8/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/8/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/8/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/8/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/8/addons',
          },
        },
      },
    },
    {
      id: '9',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/9' },
      attributes: {
        name: 'Dev tools',
        description: 'Addons that provide conveniences for development',
        position: 12,
        'addon-count': 216,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/9/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/9/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/9/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/9/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/9/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/9/addons',
          },
        },
      },
    },
    {
      id: '10',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/10' },
      attributes: {
        name: 'Deployment',
        description: 'Addons for deploying',
        position: 13,
        'addon-count': 17,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/10/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/10/subcategories',
          },
          data: [
            { type: 'categories', id: '27' },
            { type: 'categories', id: '57' },
          ],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/10/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/10/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/10/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/10/addons',
          },
        },
      },
    },
    {
      id: '11',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/11' },
      attributes: {
        name: 'Helpers and Utilities',
        description: 'Template helpers and utility functions',
        position: 14,
        'addon-count': 173,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/11/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/11/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/11/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/11/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/11/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/11/addons',
          },
        },
      },
    },
    {
      id: '12',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/12' },
      attributes: {
        name: 'Animation',
        description: 'Addons that help you animate Ember applications',
        position: 15,
        'addon-count': 44,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/12/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/12/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/12/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/12/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/12/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/12/addons',
          },
        },
      },
    },
    {
      id: '13',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/13' },
      attributes: {
        name: 'Authorization',
        description: 'Addons to do authorization in your ember app',
        position: 16,
        'addon-count': 8,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/13/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/13/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/13/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/13/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/13/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/13/addons',
          },
        },
      },
    },
    {
      id: '14',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/14' },
      attributes: {
        name: 'Forms',
        description: 'Addons that provide form-related components',
        position: 14,
        'addon-count': 49,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/14/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/14/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/14/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/14/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/14/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/14/addons',
          },
        },
      },
    },
    {
      id: '15',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/15' },
      attributes: {
        name: 'Bootstrap',
        description:
          'Addons that provide components that wrap Bootstrap components',
        position: 15,
        'addon-count': 63,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/15/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/15/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/15/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/15/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/15/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/15/addons',
          },
        },
      },
    },
    {
      id: '16',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/16' },
      attributes: {
        name: 'Datepickers',
        description: 'Addons that provide datepicker components',
        position: 20,
        'addon-count': 56,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/16/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/16/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/16/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/16/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/16/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/16/addons',
          },
        },
      },
    },
    {
      id: '17',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/17' },
      attributes: {
        name: 'Charts',
        description: 'Addons that provide charting and graph components',
        position: 16,
        'addon-count': 67,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/17/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/17/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/17/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/17/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/17/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/17/addons',
          },
        },
      },
    },
    {
      id: '18',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/18' },
      attributes: {
        name: 'Select',
        description:
          'Addons that provide components with select box functionality',
        position: 17,
        'addon-count': 76,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/18/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/18/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/18/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/18/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/18/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/18/addons',
          },
        },
      },
    },
    {
      id: '19',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/19' },
      attributes: {
        name: 'Autocomplete',
        description:
          'Addons that provide components with autocomplete functionality',
        position: 18,
        'addon-count': 26,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/19/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/19/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/19/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/19/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/19/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/19/addons',
          },
        },
      },
    },
    {
      id: '20',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/20' },
      attributes: {
        name: 'Loading indicators',
        description:
          'Addons that provide components for spinners or progress indicators',
        position: 19,
        'addon-count': 23,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/20/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/20/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/20/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/20/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/20/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/20/addons',
          },
        },
      },
    },
    {
      id: '22',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/22' },
      attributes: {
        name: 'Validations',
        description: 'Addons that help with validations',
        position: 18,
        'addon-count': 52,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/22/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/22/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/22/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/22/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/22/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/22/addons',
          },
        },
      },
    },
    {
      id: '23',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/23' },
      attributes: {
        name: 'ember-cli-simple-auth extensions',
        description: 'Addons that add to ember-cli-simple-auth',
        position: 23,
        'addon-count': 33,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/23/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/23/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/23/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/23/parent',
          },
          data: { type: 'categories', id: '1' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/23/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/23/addons',
          },
        },
      },
    },
    {
      id: '24',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/24' },
      attributes: {
        name: 'Ember Data Adapters',
        description: null,
        position: 24,
        'addon-count': 68,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/24/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/24/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/24/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/24/parent',
          },
          data: { type: 'categories', id: '6' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/24/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/24/addons',
          },
        },
      },
    },
    {
      id: '25',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/25' },
      attributes: {
        name: 'Ember Data Extensions',
        description: null,
        position: 25,
        'addon-count': 62,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/25/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/25/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/25/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/25/parent',
          },
          data: { type: 'categories', id: '6' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/25/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/25/addons',
          },
        },
      },
    },
    {
      id: '27',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/27' },
      attributes: {
        name: 'ember-cli-deploy adapters',
        description: null,
        position: 28,
        'addon-count': 11,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/27/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/27/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/27/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/27/parent',
          },
          data: { type: 'categories', id: '10' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/27/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/27/addons',
          },
        },
      },
    },
    {
      id: '28',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/28' },
      attributes: {
        name: 'Lists and tables',
        description: '',
        position: 28,
        'addon-count': 72,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/28/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/28/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/28/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/28/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/28/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/28/addons',
          },
        },
      },
    },
    {
      id: '29',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/29' },
      attributes: {
        name: 'Mobile',
        description: 'Addons related to ember apps on mobile devices',
        position: 19,
        'addon-count': 30,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/29/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/29/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/29/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/29/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/29/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/29/addons',
          },
        },
      },
    },
    {
      id: '30',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/30' },
      attributes: {
        name: 'Notifications',
        description: null,
        position: null,
        'addon-count': 24,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/30/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/30/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/30/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/30/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/30/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/30/addons',
          },
        },
      },
    },
    {
      id: '31',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/31' },
      attributes: {
        name: 'Component Suites',
        description: null,
        position: null,
        'addon-count': 41,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/31/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/31/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/31/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/31/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/31/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/31/addons',
          },
        },
      },
    },
    {
      id: '32',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/32' },
      attributes: {
        name: 'UI Framework wrappers',
        description: null,
        position: null,
        'addon-count': 23,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/32/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/32/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/32/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/32/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/32/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/32/addons',
          },
        },
      },
    },
    {
      id: '33',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/33' },
      attributes: {
        name: 'Async buttons',
        description: null,
        position: null,
        'addon-count': 14,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/33/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/33/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/33/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/33/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/33/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/33/addons',
          },
        },
      },
    },
    {
      id: '34',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/34' },
      attributes: {
        name: 'Form controls',
        description: null,
        position: null,
        'addon-count': 99,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/34/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/34/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/34/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/34/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/34/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/34/addons',
          },
        },
      },
    },
    {
      id: '35',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/35' },
      attributes: {
        name: 'Markdown',
        description: null,
        position: null,
        'addon-count': 16,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/35/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/35/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/35/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/35/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/35/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/35/addons',
          },
        },
      },
    },
    {
      id: '36',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/36' },
      attributes: {
        name: 'Site Tours',
        description: null,
        position: null,
        'addon-count': 6,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/36/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/36/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/36/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/36/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/36/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/36/addons',
          },
        },
      },
    },
    {
      id: '37',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/37' },
      attributes: {
        name: 'File Upload',
        description: null,
        position: null,
        'addon-count': 20,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/37/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/37/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/37/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/37/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/37/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/37/addons',
          },
        },
      },
    },
    {
      id: '38',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/38' },
      attributes: {
        name: 'Input Masking',
        description: null,
        position: null,
        'addon-count': 21,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/38/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/38/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/38/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/38/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/38/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/38/addons',
          },
        },
      },
    },
    {
      id: '39',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/39' },
      attributes: {
        name: 'Internationalization',
        description: 'Addons that provide internationalization/i18n features',
        position: 20,
        'addon-count': 44,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/39/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/39/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/39/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/39/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/39/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/39/addons',
          },
        },
      },
    },
    {
      id: '40',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/40' },
      attributes: {
        name: 'Modals',
        description: 'Addons for displaying modals in Ember apps',
        position: 23,
        'addon-count': 29,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/40/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/40/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/40/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/40/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/40/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/40/addons',
          },
        },
      },
    },
    {
      id: '41',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/41' },
      attributes: {
        name: 'Calendars',
        description: null,
        position: null,
        'addon-count': 15,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/41/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/41/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/41/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/41/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/41/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/41/addons',
          },
        },
      },
    },
    {
      id: '42',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/42' },
      attributes: {
        name: 'Images',
        description: null,
        position: null,
        'addon-count': 47,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/42/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/42/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/42/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/42/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/42/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/42/addons',
          },
        },
      },
    },
    {
      id: '43',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/43' },
      attributes: {
        name: 'Drag and Drop',
        description: null,
        position: null,
        'addon-count': 19,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/43/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/43/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/43/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/43/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/43/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/43/addons',
          },
        },
      },
    },
    {
      id: '44',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/44' },
      attributes: {
        name: 'WYSIWYG Editors',
        description: null,
        position: null,
        'addon-count': 40,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/44/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/44/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/44/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/44/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/44/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/44/addons',
          },
        },
      },
    },
    {
      id: '45',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/45' },
      attributes: {
        name: 'UI Elements',
        description: null,
        position: null,
        'addon-count': 167,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/45/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/45/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/45/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/45/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/45/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/45/addons',
          },
        },
      },
    },
    {
      id: '46',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/46' },
      attributes: {
        name: 'Avatars',
        description: null,
        position: null,
        'addon-count': 8,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/46/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/46/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/46/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/46/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/46/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/46/addons',
          },
        },
      },
    },
    {
      id: '47',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/47' },
      attributes: {
        name: 'Audio & Video',
        description: null,
        position: null,
        'addon-count': 21,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/47/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/47/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/47/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/47/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/47/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/47/addons',
          },
        },
      },
    },
    {
      id: '48',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/48' },
      attributes: {
        name: 'Maps',
        description: null,
        position: null,
        'addon-count': 48,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/48/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/48/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/48/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/48/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/48/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/48/addons',
          },
        },
      },
    },
    {
      id: '49',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/49' },
      attributes: {
        name: 'Mocking, Fixtures, and Factories',
        description: null,
        position: null,
        'addon-count': 28,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/49/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/49/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/49/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/49/parent',
          },
          data: { type: 'categories', id: '4' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/49/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/49/addons',
          },
        },
      },
    },
    {
      id: '50',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/50' },
      attributes: {
        name: 'Helper suites',
        description: null,
        position: null,
        'addon-count': 8,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/50/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/50/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/50/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/50/parent',
          },
          data: { type: 'categories', id: '4' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/50/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/50/addons',
          },
        },
      },
    },
    {
      id: '51',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/51' },
      attributes: {
        name: 'Template Helpers',
        description: 'Addons that provide helper functions for templates',
        position: 21,
        'addon-count': 110,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/51/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/51/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/51/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/51/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/51/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/51/addons',
          },
        },
      },
    },
    {
      id: '53',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/53' },
      attributes: {
        name: 'Icons',
        description: 'Addons that provide icons',
        position: 22,
        'addon-count': 38,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/53/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/53/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/53/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/53/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/53/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/53/addons',
          },
        },
      },
    },
    {
      id: '54',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/54' },
      attributes: {
        name: 'Accessibility',
        description: '',
        position: 24,
        'addon-count': 11,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/54/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/54/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/54/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/54/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/54/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/54/addons',
          },
        },
      },
    },
    {
      id: '55',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/55' },
      attributes: {
        name: 'Infinite Scroll',
        description: '',
        position: 25,
        'addon-count': 10,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/55/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/55/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/55/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/55/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/55/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/55/addons',
          },
        },
      },
    },
    {
      id: '56',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/56' },
      attributes: {
        name: 'Addon development',
        description: 'Addons useful for addon development',
        position: 26,
        'addon-count': 13,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/56/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/56/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/56/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/56/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/56/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/56/addons',
          },
        },
      },
    },
    {
      id: '57',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/57' },
      attributes: {
        name: 'ember-cli-deploy plugins',
        description: '',
        position: 29,
        'addon-count': 153,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/57/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/57/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/57/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/57/parent',
          },
          data: { type: 'categories', id: '10' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/57/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/57/addons',
          },
        },
      },
    },
    {
      id: '58',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/58' },
      attributes: {
        name: 'Keyboard Events',
        description: '',
        position: 27,
        'addon-count': 11,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/58/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/58/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/58/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/58/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/58/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/58/addons',
          },
        },
      },
    },
    {
      id: '59',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/59' },
      attributes: {
        name: 'Ember Polyfills',
        description: 'Addons that polyfill future Ember behavior',
        position: 28,
        'addon-count': 35,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/59/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/59/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/59/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/59/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/59/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/59/addons',
          },
        },
      },
    },
    {
      id: '60',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/60' },
      attributes: {
        name: 'Legacy Behavior',
        description:
          'Addons that bring behavior of older Ember versions to new versions',
        position: 29,
        'addon-count': 13,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/60/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/60/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/60/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/60/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/60/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/60/addons',
          },
        },
      },
    },
    {
      id: '61',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/61' },
      attributes: {
        name: 'Computed Property Macros',
        description: '',
        position: 30,
        'addon-count': 30,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/61/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/61/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/61/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/61/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/61/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/61/addons',
          },
        },
      },
    },
    {
      id: '62',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/62' },
      attributes: {
        name: 'Analytics',
        description: 'Addons for user analytics (Google Analytics, etc)',
        position: 31,
        'addon-count': 45,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/62/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/62/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/62/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/62/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/62/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/62/addons',
          },
        },
      },
    },
    {
      id: '63',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/63' },
      attributes: {
        name: 'XHR wrappers',
        description: 'Addons that wrap XHR requests',
        position: 32,
        'addon-count': 13,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/63/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/63/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/63/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/63/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/63/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/63/addons',
          },
        },
      },
    },
    {
      id: '64',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/64' },
      attributes: {
        name: 'Pagination',
        description: '',
        position: 33,
        'addon-count': 9,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/64/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/64/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/64/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/64/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/64/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/64/addons',
          },
        },
      },
    },
    {
      id: '65',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/65' },
      attributes: {
        name: 'Error Handling and Reporting',
        description: '',
        position: 34,
        'addon-count': 27,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/65/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/65/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/65/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/65/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/65/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/65/addons',
          },
        },
      },
    },
    {
      id: '66',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/66' },
      attributes: {
        name: 'Feature flags',
        description: 'Addons providing feature flags/toggles ',
        position: 35,
        'addon-count': 8,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/66/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/66/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/66/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/66/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/66/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/66/addons',
          },
        },
      },
    },
    {
      id: '67',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/67' },
      attributes: {
        name: 'API Wrappers',
        description: 'Addons that wrap server APIs',
        position: 36,
        'addon-count': 15,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/67/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/67/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/67/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/67/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/67/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/67/addons',
          },
        },
      },
    },
    {
      id: '68',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/68' },
      attributes: {
        name: 'Experiments',
        description: 'Addons to experiment with new ideas',
        position: 37,
        'addon-count': 67,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/68/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/68/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/68/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/68/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/68/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/68/addons',
          },
        },
      },
    },
    {
      id: '69',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/69' },
      attributes: {
        name: 'Material Design',
        description: '',
        position: 37,
        'addon-count': 71,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/69/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/69/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/69/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/69/parent',
          },
          data: { type: 'categories', id: '2' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/69/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/69/addons',
          },
        },
      },
    },
    {
      id: '70',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/70' },
      attributes: {
        name: 'Engines',
        description: 'Addons providing Ember engines',
        position: 38,
        'addon-count': 2,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/70/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/70/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/70/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/70/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/70/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/70/addons',
          },
        },
      },
    },
    {
      id: '71',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/71' },
      attributes: {
        name: 'Fastboot',
        description: 'Addons for when using fastboot',
        position: 9,
        'addon-count': 17,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/71/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/71/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/71/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/71/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/71/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/71/addons',
          },
        },
      },
    },
    {
      id: '72',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/72' },
      attributes: {
        name: 'Shims',
        description:
          "Addons that import a library but don't wrap any of its functionality",
        position: 39,
        'addon-count': 103,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/72/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/72/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/72/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/72/parent',
          },
          data: { type: 'categories', id: '7' },
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/72/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/72/addons',
          },
        },
      },
    },
    {
      id: '73',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/73' },
      attributes: {
        name: 'Documentation',
        description: '',
        position: 39,
        'addon-count': 8,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/73/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/73/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/73/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/73/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/73/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/73/addons',
          },
        },
      },
    },
    {
      id: '74',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/74' },
      attributes: {
        name: 'Header content',
        description: 'Addons to add/manage content in the <head> of a page',
        position: 40,
        'addon-count': 11,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/74/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/74/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/74/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/74/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/74/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/74/addons',
          },
        },
      },
    },
    {
      id: '75',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/75' },
      attributes: {
        name: 'Alternative Blueprints',
        description: 'Alternative blueprints for generating apps & addons',
        position: 41,
        'addon-count': 4,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/75/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/75/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/75/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/75/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/75/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/75/addons',
          },
        },
      },
    },
    {
      id: '76',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/76' },
      attributes: {
        name: 'Codemods',
        description: 'Addons that modify code',
        position: 42,
        'addon-count': 5,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/76/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/76/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/76/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/76/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/76/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/76/addons',
          },
        },
      },
    },
    {
      id: '77',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/77' },
      attributes: {
        name: 'GlimmerJS',
        description: 'Addons pertaining to Glimmer.js',
        position: 43,
        'addon-count': 3,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/77/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/77/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/77/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/77/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/77/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/77/addons',
          },
        },
      },
    },
    {
      id: '78',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/78' },
      attributes: {
        name: 'Types',
        description: 'Types, for Typescript',
        position: 44,
        'addon-count': 2,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/78/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/78/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/78/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/78/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/78/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/78/addons',
          },
        },
      },
    },
    {
      id: '79',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/79' },
      attributes: {
        name: 'Modifiers',
        description: '',
        position: 45,
        'addon-count': 24,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/79/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/79/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/79/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/79/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/79/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/79/addons',
          },
        },
      },
    },
    {
      id: '80',
      type: 'categories',
      links: { self: 'https://emberobserver.com/api/v2/categories/80' },
      attributes: {
        name: 'Tracking',
        description: 'Addons that provide autotracking-related functionality',
        position: 46,
        'addon-count': 2,
      },
      relationships: {
        subcategories: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/80/relationships/subcategories',
            related:
              'https://emberobserver.com/api/v2/categories/80/subcategories',
          },
          data: [],
        },
        parent: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/80/relationships/parent',
            related: 'https://emberobserver.com/api/v2/categories/80/parent',
          },
          data: null,
        },
        addons: {
          links: {
            self: 'https://emberobserver.com/api/v2/categories/80/relationships/addons',
            related: 'https://emberobserver.com/api/v2/categories/80/addons',
          },
        },
      },
    },
  ],
};
export default data;
