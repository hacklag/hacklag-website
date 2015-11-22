let host = 'https://api.syncano.rocks';
let api = host + '/v1';

export default {

  HOST: host,
  API: api,

  // Views constrains
  DATAOBJECTS_PAGE_SIZE: 50,
  VIEW_MODES: ['cards', 'stream'],
  SORT_MODES: [
    'sortByName',
    'sortByDate',
    'sortByFullName',
    'sortByEmail',
    'sortByCodeBoxName',
    'sortByWebHookName',
    'sortByScheduleCreateDate',
    'sortByScheduleName',
    'sortByTriggerName',
    'sortByTriggerCreateDate',
    'sortByAPIKeyDescription',
    'sortByAPIKeyCreationDate',
    'sortByClassCreateDate',
    'sortByClassName'
  ],

  VIEW_ACTIONS_MAP: {
    sortByName: 'id',
    sortByDate: 'data.created_at',
    switchToListView: 'stream',
    switchToCardView: 'cards',
    sortByFullName: 'fullname',
    sortByEmail: 'data.email',
    sortByCodeBoxName: 'data.name',
    sortByWebHookName: 'data.slug',
    sortByScheduleCreateDate: 'data.created_at',
    sortByScheduleName: 'data.name',
    sortByTriggerName: 'data.name',
    sortByTriggerCreateDate: 'data.created_at',
    sortByAPIKeyCreationDate: 'data.created_at',
    sortByAPIKeyDescription: 'data.description',
    sortByClassCreateDate: 'data.created_at',
    sortByClassName: 'data.name'
  },

  crontabs: [
    {
      description: 'Every minute (* * * * *)',
      crontab: '* * * * *'
    }, {
      description: 'Every 5 minutes (*/5 * * * *)',
      crontab: '*/5 * * * *'
    }, {
      description: 'Twice an hour (0,30 * * * *)',
      crontab: '0,30 * * * *'
    }, {
      description: 'Once an hour (0 * * * *)',
      crontab: '0 * * * *'
    }, {
      description: 'Twice a day (0 0,12 * * *)',
      crontab: '0 0,12 * * *'
    }, {
      description: 'Once a day (0 0 * * *)',
      crontab: '0 0 * * *'
    }, {
      description: 'Once a week (0 0 * * 0)',
      crontab: '0 0 * * 0'
    }, {
      description: '1st and 15th (0 0 1,15 * *)',
      crontab: '0 0 1,15 * *'
    }, {
      description: 'Once a month (0 0 1 * *)',
      crontab: '0 0 1 * *'
    }, {
      description: 'Once a year (0 0 1 1 *)',
      crontab: '0 0 1 1 *'
    }
  ],

  fieldTypes: [
    'string',
    'text',
    'integer',
    'float',
    'boolean',
    'datetime',
    'file',
    'reference'
  ],

  PROTECTED_FROM_EDIT_CLASS_NAMES: [
    {
      name: 'user_profile',
      fields: ['name']
    }
  ],

  PROTECTED_FROM_DELETE_CLASS_NAMES: [
    'user_profile'
  ]
};
