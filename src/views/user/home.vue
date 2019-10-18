<template>
  <div>
    <Breadcrumb style="margin-bottom:10px">
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      <BreadcrumbItem>首页</BreadcrumbItem>
    </Breadcrumb>
    <!--<div class="card-wrapper">-->
      <!--<mycard class="mycard" icon="md-person-add" title="新增用户" :count="23" bgcolor="#2d8cf0"></mycard>-->
      <!--<mycard class="mycard" icon="md-locate" title="累计点击" :count="240" bgcolor="#19be6b"></mycard>-->
      <!--<mycard class="mycard" icon="md-help-circle" title="新增问答" :count="158" bgcolor="#ff9900"></mycard>-->
      <!--<mycard class="mycard" icon="md-share" title="分享统计" :count="741" bgcolor="#e46cbb"></mycard>-->
      <!--<mycard class="mycard" icon="md-contacts" title="新增互动" :count="24" bgcolor="#ee3322"></mycard>-->
      <!--<mycard class="mycard" icon="md-map" title="新增页面" :count="19" bgcolor="#8e6cdd"></mycard>-->
    <!--</div>-->
    <Row>
      <Col :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 4}">
        <mycard class="mycard" icon="md-person-add" title="新增用户" :count="23" bgcolor="#2d8cf0"></mycard>
      </Col>
      <Col :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 4}">
        <mycard class="mycard" icon="md-locate" title="累计点击" :count="240" bgcolor="#19be6b"></mycard>
      </Col>
      <Col :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 4}">
        <mycard class="mycard" icon="md-help-circle" title="新增问答" :count="158" bgcolor="#ff9900"></mycard>
      </Col>
      <Col :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 4}">
        <mycard class="mycard" icon="md-share" title="分享统计" :count="541" bgcolor="#e46cbb"></mycard>
      </Col>
      <Col :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 4}">
        <mycard class="mycard" icon="md-contacts" title="新增互动" :count="242" bgcolor="#ee3322"></mycard>
      </Col>
      <Col :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 4}">
        <mycard class="mycard lastcard" icon="md-map" title="新增页面" :count="19" bgcolor="#8e6cdd"></mycard>
      </Col>
    </Row>
    <Row>
      <Col :md="{span: 24}" :lg="{span: 14}">
        <Card class="chart">
          <chart-column></chart-column>
        </Card>
      </Col>
      <Col :md="{span: 24}" :lg="{span: 10}">
        <Card class="chart">
          <chart-pie></chart-pie>
        </Card>
      </Col>
    </Row>
    <Row ref="row">
      <Col span="24">
        <Card class="chart">
          <chart-line></chart-line>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  import mycard from '@/components/mycard'
  import column from '@/components/charts/column'
  import pie from '@/components/charts/pie'
  import line from '@/components/charts/line'


  export default {
    name: "home",
    components: {
      mycard,
      "chart-column": column,
      "chart-pie": pie,
      "chart-line": line
    }
  }
</script>

<style scoped>
  /*.card-wrapper {*/
    /*display: flex;*/
    /*flex-wrap: wrap;*/
  /*}*/
  .mycard {
    flex: 1;
    margin: 8px;
  }
  .chart {
    width: calc(100% - 16px);
    margin: 8px;
  }
</style>