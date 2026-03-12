export default {
  // Search area
  search: {
    roleName: 'Role Name',
    roleNamePlaceholder: 'Please enter role name',
    roleKey: 'Permission Key',
    roleKeyPlaceholder: 'Please enter permission key',
    status: 'Status',
    statusPlaceholder: 'Role Status',
    createTime: 'Create Time',
    startDate: 'Start Date',
    endDate: 'End Date',
    search: 'Search',
    reset: 'Reset',
    language: 'Language',
    languageZh: '中文',
    languageEn: 'English'
  },
  // Button area
  button: {
    add: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    export: 'Export',
    more: 'More',
    dataScope: 'Data Scope',
    assignUser: 'Assign User'
  },
  // Table columns
  table: {
    roleId: 'Role ID',
    roleName: 'Role Name',
    roleKey: 'Permission Key',
    roleSort: 'Sort Order',
    status: 'Status',
    createTime: 'Create Time',
    operation: 'Operation'
  },
  // Pagination
  pagination: {
    total: 'Total {total} items',
    sizes: 'items/page',
    jumper: 'Go to'
  },
  // Dialog - Add/Edit Role
  dialog: {
    addTitle: 'Add Role',
    editTitle: 'Edit Role',
    roleName: 'Role Name',
    roleNamePlaceholder: 'Please enter role name',
    roleKey: 'Permission Key',
    roleKeyTooltip: 'Permission key defined in controller, e.g.: @PreAuthorize(`@ss.hasRole(\'admin\')`)',
    roleKeyPlaceholder: 'Please enter permission key',
    roleSort: 'Role Sort',
    status: 'Status',
    menuPermission: 'Menu Permission',
    expand: 'Expand/Collapse',
    selectAll: 'Select All/None',
    parentChildLink: 'Parent-Child Link',
    loading: 'Loading, please wait',
    remark: 'Remark',
    remarkPlaceholder: 'Please enter content',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  // Data Scope Dialog
  dataScopeDialog: {
    title: 'Assign Data Scope',
    roleName: 'Role Name',
    roleKey: 'Permission Key',
    scope: 'Permission Scope',
    dataPermission: 'Data Permission',
    scopeOptions: {
      all: 'All Data Permission',
      custom: 'Custom Data Permission',
      dept: 'Current Dept Data Permission',
      deptAndChild: 'Current Dept and Below Data Permission',
      self: 'Only Self Data Permission'
    }
  },
  // Form validation
  validation: {
    roleNameRequired: 'Role name cannot be empty',
    roleKeyRequired: 'Permission key cannot be empty',
    roleSortRequired: 'Role sort cannot be empty'
  },
  // Operation messages
  message: {
    enableConfirm: 'Are you sure to "{text}" the "{roleName}" role?',
    enable: 'Enable',
    disable: 'Disable',
    enableSuccess: '{text} successful',
    deleteConfirm: 'Are you sure to delete the data with role ID "{roleIds}"?',
    deleteSuccess: 'Delete successful',
    addSuccess: 'Add successful',
    editSuccess: 'Edit successful',
    exportSuccess: 'Export successful'
  }
}
