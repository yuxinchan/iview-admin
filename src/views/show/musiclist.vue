<template>
  <div>
    <Breadcrumb style="margin-bottom:10px">
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      <BreadcrumbItem>音乐发现</BreadcrumbItem>
      <BreadcrumbItem>音乐排行</BreadcrumbItem>
    </Breadcrumb>
    <div>
      <Table border ref="selection" :columns="cols" :data="musiclist"></Table>
      <div class="flex j-center" style="margin-top: 30px">
        <Page :total="4" :page-size="4"/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "musiclist",
    data () {
      return {
        cols: [
          {
            title: '封面',
            key: 'pic_big',
            render: (h, params) => {
              return h("img", {
                attrs: {
                  src: params.row.pic_big
                },
                style: {
                  width: '100px',
                  height: '100px'
                }
              })
            }
          },
          {
            title: '专辑',
            key: 'album_title'
          },
          {
            title: '作者',
            key: 'author'
          },
          {
            title: '歌名',
            key: 'title',
          },
          {
            title: '排名变化',
            key: 'rank_change',
          },
          {
            title: '操作',
            //eslint-disable-next-line
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
                }, '详情')
              ])
            }
          }
        ],
        musiclist: []
      }
    },
    created() {
      // this.getUserList().then(res => {
      //   //eslint-disable-next-line
      //   console.log(res.data);
      //   this.musiclist = res.data.musiclist
      // })
      axios.get("https://api.apiopen.top/musicRankings", {
        params: {

        }
      }).then(res => {
        this.musiclist = res.data.result[1].content
      })
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '歌曲信息',
          content: `专辑：${this.musiclist[index].album_title}<br>作者：${this.musiclist[index].author}<br>歌名：${this.musiclist[index].title}<br>排名变化：${this.musiclist[index].rank_change}`
        })
      }
    }
  }
</script>

<style scoped>
</style>