<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">YuXin管理平台</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout style="height:calc(100vh - 64px)">
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu
              ref="leftMenu" @on-open-change="isCollapsed=false"
              @on-select="isCollapsed=false" theme="dark" active-name="0-1"
              width="auto" :class="menuitemClasses" :open-names="openNames"
          >
            <MenuItem name="0-1" to="/">
              <Icon type="ios-navigate"></Icon>
              <span>工作平台</span>
            </MenuItem>
            <Submenu name="1">
              <template slot="title">
                <Icon type="md-people"></Icon>
                <span>用户管理</span>
              </template>
              <MenuItem name="1-1" to="/userlist">用户列表</MenuItem>
              <MenuItem name="1-2">用户统计</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                <span>订单管理</span>
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
              <MenuItem name="2-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-cart"></Icon>
                <span>商品管理</span>
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
              <MenuItem name="3-3">Option 3</MenuItem>
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
  export default {
    data () {
      return {
        openNames: [],
        isCollapsed: false
      };
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
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
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
</style>