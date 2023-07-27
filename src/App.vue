<template>
  <div class="app">
    <div class="line" />
    <TabsCom />
    <CenterCom />
    <div class="line2" />
    <BtnsCom />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabsCom from './components/TabsCom.vue';
import CenterCom from './components/CenterCom.vue';
import BtnsCom from './components/BtnsCom.vue';

export default defineComponent({
  name: 'App',
  components: {
    TabsCom,
    CenterCom,
    BtnsCom
  }
});
</script>

<style lang="less">
.app {
  background-color: #e8eaed;

  .line {
    height: 8px;
  }

  .line2 {
    background-color: bisque;
    height: 300px;
  }
}
</style>
