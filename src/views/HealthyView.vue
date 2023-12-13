<script setup>
import { ref } from 'vue';

const localThing = new Map();
const clickCount = ref(0);
const listenerCount = ref(0);

function crazyThing() {
  const bigArrayBuffer = new ArrayBuffer(2 ** 20 - 1);

  localThing.set(`${listenerCount.value}`, bigArrayBuffer);

  listenerCount.value = listenerCount.value + 1;
}

function onAddClick() {
  window.addEventListener('click', crazyThing);

  clickCount.value = 1 + clickCount.value;
}

function onCleanClick() {
  window.removeEventListener('click', crazyThing);
  clickCount.value = 0;
  listenerCount.value = 0;
}
</script>

<template>
  <main>
      <button @click="onAddClick">ADD</button>
      <p>Click counts {{ clickCount }}</p>
      <p>Listeners counts {{ listenerCount }}</p>
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
  width: 50%;
  height: 36px;
  margin: 24px;
}
</style> 