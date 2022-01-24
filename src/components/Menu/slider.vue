<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" >
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>采购管理</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>财务管理</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>进销存</span></span>
        <a-menu-item key="5">
          仓库管理
        </a-menu-item>
        <a-menu-item key="6">
         物流登记
        </a-menu-item>
        <a-menu-item key="7">
          库存查询
        </a-menu-item>
        <a-menu-item key="8">
          出库查询
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>项目管理</span></span>
        <a-menu-item key="9">
         项目管理
        </a-menu-item>
        <a-menu-item key="10">
          供货需求
        </a-menu-item>
        <a-sub-menu key="sub3" title="采购管理">
          <a-menu-item key="11">
            采购管理
          </a-menu-item>
          <a-menu-item key="12">
            供应商管理
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout> 
 </a-layout>
</template>
<script>

export default {
    components: {    
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
/* 调整默认样式 */
.ant-layout-header {
  display: flex;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
