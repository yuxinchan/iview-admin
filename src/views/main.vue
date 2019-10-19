<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" class="flex j-center j-bt" theme="dark" active-name="1">
          <div class="layout-logo">YuXin音乐管理平台</div>
            <Submenu name="1">
              <template slot="title">
                <Icon type="md-person"></Icon>
                <span>{{userName}}</span>
              </template>
              <MenuItem name="account" @click.native="logout">退出</MenuItem>
            </Submenu>
        </Menu>
      </Header>
      <Layout style="height:calc(100vh - 64px)">
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu
              ref="leftMenu" @on-open-change="isCollapsed=false" :accordion="true"
              @on-select="selectItem" theme="dark" :active-name="activeName"
              width="auto" :class="menuitemClasses" :open-names="openNames"
          >
            <MenuItem name="0-1" to="/">
              <Icon type="md-pie"></Icon>
              <span>工作平台</span>
            </MenuItem>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-nuclear"></Icon>
                <span>歌曲管理</span>
              </template>
              <MenuItem name="1-1" to="/starlist">收藏列表</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>音乐发现</span>
              </template>
              <MenuItem name="2-1" to="/musiclist">音乐排行</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout style="padding: 15px">
          <router-view></router-view>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        openNames: [],
        activeName: '',
        isCollapsed: false
      }
    },
    created() {
      if (this.$route.meta && this.$route.meta.order) {
        this.activeName = this.$route.meta.order
        let submenuName = this.$route.meta.order.split('-')[0]
        if (submenuName !== '0') {
          this.openNames.push(submenuName)
        }
      }
    },
    watch: {
      isCollapsed(val) {
        if (val) {
          this.openNames = []
          this.$nextTick(() => {
            this.$refs.leftMenu.updateOpened()
          })
        }
      }
    },
    computed: {
      ...mapGetters(["userName"]),
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },

    methods: {
      ...mapMutations(["removeLoginUserName"]),
      logout() {
        this.removeLoginUserName()
        this.$router.push("/login")
      },
      selectItem(name) {
        this.isCollapsed = false
        if (name.startsWith('0')) {
          this.openNames = []
          this.$nextTick(() => {
            this.$refs.leftMenu.updateOpened()
          })
        }
      }
    }
  }
</script>

<style scoped>
  .layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }
  .layout-logo{
    color: #fff;
    height: 30px;
    line-height: 30px;
    font-size: 26px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-con{
    height: 100%;
    width: 100%;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0;
    transition: width .2s ease;
  }
  .collapsed-menu .ivu-menu-submenu-title-icon {
    display: none;
  }
  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .ivu-layout-header {
    padding: 0 !important;
  }
</style>