<script setup>
import { ref } from 'vue';

const add = ref([]);

function onAddClick() {
  const bigArrayBuffer = new ArrayBuffer(2 ** 20 - 1);

  add.value.push(bigArrayBuffer);
}

function onCleanClick() {
  add.value = [];
}
</script>

<template>
  <main>
      <button @click="onAddClick">ADD</button>
      <button @click="onCleanClick">CLEAR</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-evenly;
  align-items: center
}

button {
  width: 100%;
  height: 36px;
  margin: 24px;
}
</style>