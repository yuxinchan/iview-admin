<template>
  <div id="c2"></div>
</template>

<script>
  import G2 from '@antv/g2'
  export default {
    name: "pie",
    mounted() {
      this.$nextTick(() => {
        var data = [{
          item: '新增用户',
          count: 23,
          percent: 0.019
        }, {
          item: '累计点击',
          count: 240,
          percent: 0.196
        }, {
          item: '新增回答',
          count: 158,
          percent: 0.129
        }, {
          item: '分享统计',
          count: 541,
          percent: 0.442
        }, {
          item: '新增互动',
          count: 242,
          percent: 0.198
        }, {
          item: '新增页面',
          count: 19,
          percent: 0.016
        }]
        var chart = new G2.Chart({
          container: 'c2',
          forceFit: true,
          height: 300,
          padding: 'auto'
        })
        chart.source(data, {
          percent: {
            formatter: function formatter(val) {
              val = val * 100 + '%'
              return val
            }
          }
        })
        chart.coord('theta')
        chart.tooltip({
          showTitle: false
        })
        chart.intervalStack().position('percent').color('item').label('percent', {
          offset: -40,
          // autoRotate: false,
          textStyle: {
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        }).tooltip('item*percent', function(item, percent) {
          percent = percent * 100 + '%'
          return {
            name: item,
            value: percent
          }
        }).style({
          lineWidth: 1,
          stroke: '#fff'
        })
        chart.render()
      })
    }
  }
</script>

<style scoped>

</style>