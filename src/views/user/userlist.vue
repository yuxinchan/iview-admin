<template>
  <div>
    <Breadcrumb style="margin-bottom:10px">
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      <BreadcrumbItem>用户管理</BreadcrumbItem>
      <BreadcrumbItem>用户列表</BreadcrumbItem>
    </Breadcrumb>
    <div style="margin:10px 0">
      <Button type="primary" @click="">添加用户</Button>
    </div>
    <div>
      <Table  border :columns="cols" :data="users"></Table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userlist",
    data () {
      return {
        cols: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '性别',
            key: 'gender'
          },
          {
            title: '操作',
            key: 'action',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        users: [
          {
            name: '张三',
            age: 18,
            gender: '男',
            $isEdit: false
          },
          {
            name: '李四',
            age: 24,
            gender: '女',
            $isEdit: false
          },
          {
            name: '王五',
            age: 40,
            gender: '男',
            $isEdit: false
          },
          {
            name: '刘六',
            age: 35,
            gender: '男',
            $isEdit: false
          }
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.users[index].name}<br>年龄：${this.users[index].age}<br>性别：${this.users[index].gender}`
        })
      },
      remove (index) {
        this.users.splice(index, 1)
      }
    }
  }
</script>

<style scoped>

</style>