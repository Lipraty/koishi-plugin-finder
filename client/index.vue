<template>
  <div v-if="current.name === 'finder'" ref="finderRef" class="finder">
    <Menu />
      <k-content>
        <h2 class="k-schema-header">主页</h2>
      </k-content>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, getCurrentInstance, onMounted } from 'vue'
import { useRpc } from '@koishijs/client'
import { } from 'koishi-plugin-finder'
import Menu from './components/menu.vue'

const viewPool = []

const current: any = inject('manager.settings.current')

const parentWidth = ref(0)
const finderRef = ref<HTMLElement>()

onMounted(() => {
  if (current.value.name !== 'finder') return
  const parent = getCurrentInstance().parent.parent.parent?.parent?.parent // this > Anonymous > KSlot > Plugin > ElScrollbar
  console.log(parent)
  parentWidth.value = getParentWidth(parent)
  finderRef.value.style.width = `${parentWidth.value}px`

  window.addEventListener('resize', () => {
    parentWidth.value = getParentWidth(parent)
    finderRef.value.style.width = `${parentWidth.value}px`
  })
})

function getParentWidth(parent) {
  return parent.vnode.el.clientWidth
}

const data = useRpc()

</script>

<style scoped>
.finder {
  position: absolute;
  left: 0;
  right: 0;
  
}

.finder-content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
