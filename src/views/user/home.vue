<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      <BreadcrumbItem>首页</BreadcrumbItem>
    </Breadcrumb>
    <mycard icon="md-contacts" title="新增用户" count="23" bgcolor="#2d8cf0"></mycard>
    <mycard icon="md-contacts" title="累计点击" count="240" bgcolor="#19be6b"></mycard>
    <mycard icon="md-contacts" title="新增问答" count="158" bgcolor="#ff9900"></mycard>
    <mycard icon="md-contacts" title="分享统计" count="741" bgcolor="#e46cbb"></mycard>
  </div>
</template>

<script>
  import mycard from '@/components/mycard'
  export default {
    name: "home",
    components: {
      mycard
    }
  }
</script>

<style scoped>
</style>