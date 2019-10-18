<template>
  <div id="c1"></div>
</template>

<script>
  import G2 from '@antv/g2'
  export default {
    name: "column",
    mounted() {
      this.$nextTick(() => {
        const data = [
          { genre: '新增用户', sold: 23 },
          { genre: '累计点击', sold: 240 },
          { genre: '新增回答', sold: 158 },
          { genre: '分享统计', sold: 541 },
          { genre: '新增互动', sold: 242 },
          { genre: '新增页面', sold: 19 }
        ] // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
          // Step 1: 创建 Chart 对象
        const chart = new G2.Chart({
          container: 'c1', // 指定图表容器 ID
          forceFit: true, // 指定图表宽度
          height : 300, // 指定图表高度
          padding: 'auto'
        })
        // Step 2: 载入数据源
        chart.source(data)
        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        chart.interval().position('genre*sold').color('genre')
        // Step 4: 渲染图表
        chart.render()
      })

    }
  }
</script>

<style scoped>
</style>