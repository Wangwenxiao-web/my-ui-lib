<script lang="ts" setup>
const props = defineProps<{
  type?: 'default' | 'primary' | 'danger'
}>()

const typeClass = computed(() => `my-button--${props.type || 'default'}`)
</script>

<template>
  <button class="my-button" :class="typeClass">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.my-button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: var(--ui-color-text-white);
}

/* 默认按钮（灰色） */
.my-button--default {
  background-color: #e0e0e0;
  color: #333;
}

.my-button--default:hover {
  background-color: #d0d0d0;
}

/* 主按钮（主题蓝） */
.my-button--primary {
  background-color: var(--ui-color-primary);
}

.my-button--primary:hover {
  background-color: var(--ui-color-primary-hover);
}

.my-button--primary:active {
  background-color: var(--ui-color-primary-active);
}

/* 危险按钮（红色） */
.my-button--danger {
  background-color: var(--ui-color-danger);
}
.my-button--danger:hover {
  background-color: var(--ui-color-danger-hover);
}
.my-button--danger:active {
  background-color: var(--ui-color-danger-active);
}
.my-button--danger:disabled {
  background-color: var(--ui-color-danger-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
