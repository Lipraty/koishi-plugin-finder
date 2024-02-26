<template>
  <div v-if="current.name === 'finder'" class="finder-header">
    <h1 style="margin: 0;">Finder</h1>
    <el-button>配置项</el-button>
  </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'

const current: any = inject('manager.settings.current')

</script>

<style scoped>
.finder-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>