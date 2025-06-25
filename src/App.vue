<script setup lang="ts">
import { MyButton } from "./components/Button";
import { MyInput } from "./components/input";
import { ref } from "vue";

const value = ref("332211");
const password = ref("")
const content = ref("")
</script>

<template>
  <div>
    <MyButton type="primary">Click me</MyButton>
    <MyButton type="default">Click me</MyButton>
    <MyButton type="danger">Click me</MyButton>

    <!-- 基础用法 -->
    <MyInput v-model="value" placeholder="请输入内容" />

    <!-- 不同类型 -->
    <MyInput v-model="password" type="password" />
    <MyInput v-model="content" type="textarea" />

    <!-- 不同尺寸 -->
    <MyInput v-model="value" size="small" />
    <MyInput v-model="value" size="medium" />
    <MyInput v-model="value" size="large" />

    <!-- 可清空 -->
    <MyInput v-model="value" clearable />

    <!-- 禁用状态 -->
    <MyInput v-model="value" disabled />

    <!-- 只读状态 -->
    <MyInput v-model="value" readonly />
  </div>
</template>

<style scoped></style>
