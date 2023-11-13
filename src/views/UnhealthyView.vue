<script setup>
import { ref } from 'vue';

import { globalThing }from './unhealthy';

const clickCount = ref(0);
const listenerCount = ref(0);

function crazyThing() {
  const bigArrayBuffer = new ArrayBuffer(2 ** 20 - 1);

  globalThing.set(`${listenerCount.value}`, bigArrayBuffer);

  listenerCount.value = listenerCount.value + 1;
}

function onAddClick() {
  window.addEventListener('click', crazyThing);

  clickCount.value = 1 + clickCount.value;
}

</script>

<template>
  <main>
    <button @click="onAddClick">ADD</button>
    <p>Click counts {{ clickCount }}</p>
    <p>Listeners counts {{ listenerCount }}</p>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center
}

button {
  width: 100%;
  height: 36px;
  margin: 24px;
}
</style>
