<!-- src/components/Button/index.vue -->
<template>
  <button class="my-button">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  type?: 'default' | 'primary' | 'danger'
}>()

// 未来我们可以根据 type 实现不同的样式
</script>

<style scoped>
.my-button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
}

.my-button:hover {
  background-color: #ddd;
}
</style>
