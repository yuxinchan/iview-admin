<template>
  <Card :padding=0 class="no-select">
    <div style="display:flex">
      <div class="flex a-center j-center" style="height:110px;width:92px" :style="{'background-color':bgcolor}">
        <Icon :type="icon"></Icon>
      </div>
      <div class="flex flex-col a-center j-center flex-1" style="text-align:center">
        <h1>{{mycount}}</h1>
        <div>{{title}}</div>
      </div>
    </div>
  </Card>
</template>

<script>
  export default {
    name: "mycard",
    props: ["icon", "bgcolor", "count", "title"],
    data() {
      return {
        mycount: 0
      }
    },
    mounted() {
      let timer = window.setInterval(() => {
        if (this.mycount === this.count) return window.clearInterval(timer)
        this.mycount++
      }, 1)
    }
  }
</script>

<style scoped>
  .ivu-icon {
    color: #fff;
    font-size: 30px;
  }
</style>