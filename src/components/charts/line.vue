<template>
  <div id="c3"></div>
</template>

<script>
  import G2 from '@antv/g2'
  import DataSet from '@antv/data-set'
  export default {
    mounted() {
      this.$nextTick(() => {
        var data = [{
          month: 'Jan',
          我的活跃度: 7.0,
          平均活跃度: 3.9
        }, {
          month: 'Feb',
          我的活跃度: 6.9,
          平均活跃度: 4.2
        }, {
          month: 'Mar',
          我的活跃度: 9.5,
          平均活跃度: 5.7
        }, {
          month: 'Apr',
          我的活跃度: 14.5,
          平均活跃度: 8.5
        }, {
          month: 'May',
          我的活跃度: 18.4,
          平均活跃度: 11.9
        }, {
          month: 'Jun',
          我的活跃度: 21.5,
          平均活跃度: 15.2
        }, {
          month: 'Jul',
          我的活跃度: 25.2,
          平均活跃度: 17.0
        }, {
          month: 'Aug',
          我的活跃度: 26.5,
          平均活跃度: 16.6
        }, {
          month: 'Sep',
          我的活跃度: 23.3,
          平均活跃度: 14.2
        }, {
          month: 'Oct',
          我的活跃度: 18.3,
          平均活跃度: 10.3
        }, {
          month: 'Nov',
          我的活跃度: 13.9,
          平均活跃度: 6.6
        }, {
          month: 'Dec',
          我的活跃度: 9.6,
          平均活跃度: 4.8
        }]
        var ds = new DataSet()
        var dv = ds.createView().source(data)
        // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
        dv.transform({
          type: 'fold',
          fields: ['我的活跃度', '平均活跃度'], // 展开字段集
          key: 'act', // key字段
          value: 'temperature' // value字段
        })
        var chart = new G2.Chart({
          container: 'c3',
          forceFit: true,
          height: 300,
          padding: 'auto'
        })
        chart.source(dv, {
          month: {
            range: [0, 1]
          }
        })
        chart.tooltip({
          crosshairs: {
            type: 'line'
          }
        })
        chart.axis('temperature', {
          label: {
            formatter: function formatter(val) {
              return val + '°C'
            }
          }
        })
        chart.line().position('month*temperature').color('act').shape('smooth')
        chart.point().position('month*temperature').color('act').size(4).shape('circle').style({
          stroke: '#fff',
          lineWidth: 1
        })
        chart.render()
      })
    }
  }
</script>

<style scoped>
</style>