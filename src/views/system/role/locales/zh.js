export default {
  // 搜索区域
  search: {
    roleName: '角色名称',
    roleNamePlaceholder: '请输入角色名称',
    roleKey: '权限字符',
    roleKeyPlaceholder: '请输入权限字符',
    status: '状态',
    statusPlaceholder: '角色状态',
    createTime: '创建时间',
    startDate: '开始日期',
    endDate: '结束日期',
    search: '搜索',
    reset: '重置',
    language: '语言',
    languageZh: '中文',
    languageEn: 'English'
  },
  // 按钮区域
  button: {
    add: '新增',
    edit: '修改',
    delete: '删除',
    export: '导出',
    more: '更多',
    dataScope: '数据权限',
    assignUser: '分配用户'
  },
  // 表格列
  table: {
    roleId: '角色编号',
    roleName: '角色名称',
    roleKey: '权限字符',
    roleSort: '显示顺序',
    status: '状态',
    createTime: '创建时间',
    operation: '操作'
  },
  // 分页
  pagination: {
    total: '共 {total} 条',
    sizes: '条/页',
    jumper: '前往'
  },
  // 对话框 - 添加/编辑角色
  dialog: {
    addTitle: '添加角色',
    editTitle: '修改角色',
    roleName: '角色名称',
    roleNamePlaceholder: '请输入角色名称',
    roleKey: '权限字符',
    roleKeyTooltip: '控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole(\'admin\')`)',
    roleKeyPlaceholder: '请输入权限字符',
    roleSort: '角色顺序',
    status: '状态',
    menuPermission: '菜单权限',
    expand: '展开/折叠',
    selectAll: '全选/全不选',
    parentChildLink: '父子联动',
    loading: '加载中，请稍候',
    remark: '备注',
    remarkPlaceholder: '请输入内容',
    confirm: '确 定',
    cancel: '取 消'
  },
  // 数据权限对话框
  dataScopeDialog: {
    title: '分配数据权限',
    roleName: '角色名称',
    roleKey: '权限字符',
    scope: '权限范围',
    dataPermission: '数据权限',
    scopeOptions: {
      all: '全部数据权限',
      custom: '自定数据权限',
      dept: '本部门数据权限',
      deptAndChild: '本部门及以下数据权限',
      self: '仅本人数据权限'
    }
  },
  // 表单验证
  validation: {
    roleNameRequired: '角色名称不能为空',
    roleKeyRequired: '权限字符不能为空',
    roleSortRequired: '角色顺序不能为空'
  },
  // 操作提示
  message: {
    enableConfirm: '确认要"{text}""{roleName}"角色吗？',
    enable: '启用',
    disable: '停用',
    enableSuccess: '{text}成功',
    deleteConfirm: '是否确认删除角色编号为"{roleIds}"的数据项？',
    deleteSuccess: '删除成功',
    addSuccess: '新增成功',
    editSuccess: '修改成功',
    exportSuccess: '导出成功'
  }
}
