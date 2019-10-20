<template>
  <div>
    <Breadcrumb style="margin-bottom:10px">
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      <BreadcrumbItem>歌曲管理</BreadcrumbItem>
      <BreadcrumbItem>收藏列表</BreadcrumbItem>
    </Breadcrumb>
    <div style="margin:10px 0">
      <Button type="primary" @click="showmodal=true">添加音乐</Button>
    </div>
    <div>
      <Table  border :columns="cols" :data="music"></Table>
    </div>
    <Modal v-model="showmodal" title="添加音乐" @on-ok="saveUser('newMusicForm')">
      <Form :model="formItem" ref="newMusicForm" :label-width="80">
        <FormItem label="专辑">
          <Input v-model="formItem.album" placeholder="添加专辑"></Input>
        </FormItem>
        <FormItem label="歌名">
          <Input v-model="formItem.name" placeholder="添加歌名"></Input>
        </FormItem>
        <FormItem label="类型">
          <Select v-model="formItem.type">
            <Option value="摇滚">摇滚</Option>
            <Option value="民摇">民摇</Option>
            <Option value="嘻哈">嘻哈</Option>
            <Option value="纯音">纯音</Option>
          </Select>
        </FormItem>
        <FormItem label="发布日期">
          <Row>
            <Col span="11">
              <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="评级">
          <RadioGroup v-model="formItem.grade">
            <Radio label="极好">极好</Radio>
            <Radio label="好听">好听</Radio>
            <Radio label="一般">一般</Radio>
            <Radio label="不行">不行</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="备注">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="添加备注信息"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "starlist",
    data () {
      return {
        formItem: {
          album: '',
          name: '',
          type: '',
          date: '',
          grade: '一般',
          textarea: ''
        },
        showmodal: false,
        cols: [
          {
            title: '专辑',
            key: 'album'
          },
          {
            title: '歌名',
            key: 'name'
          },
          {
            title: '类型',
            key: 'type'
          },
          {
            title: '评级',
            key: 'grade'
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
        music: [
          {
            album: '时空',
            name: '虫洞',
            type: '纯音',
            grade: '好听',
            $isEdit: false
          },
          {
            album: '加速度',
            name: '越来越快',
            type: '摇滚',
            grade: '极好',
            $isEdit: false
          },
          {
            album: '越过山丘',
            name: '阳光',
            type: '民谣',
            grade: '不行',
            $isEdit: false
          },
          {
            album: '欧式晚餐',
            name: '意面',
            type: '后摇',
            grade: '一般',
            $isEdit: false
          },
          {
            album: '圣诞歌',
            name: '光',
            type: '纯音',
            grade: '极好',
            $isEdit: false
          },
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `专辑：${this.music[index].album}<br>歌名：${this.music[index].name}<br>类型：${this.music[index].type}<br>评级：${this.music[index].grade}`
        })
      },
      remove (index) {
        this.music.splice(index, 1)
      },
      saveUser(name) {
        let newMusic = {}
        newMusic.album = this.formItem.album
        newMusic.name = this.formItem.name
        newMusic.type = this.formItem.type
        newMusic.date = this.formItem.date
        newMusic.grade = this.formItem.grade
        this.music.push(newMusic)
        this.resetForm(name)
      },
      resetForm(name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>

<style scoped>

</style>