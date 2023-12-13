<script setup>
import { ref } from 'vue';

import { globalThing }from './unhealthy';

const clickCount = ref(0);
const listenerCount = ref(0);
const dirtyElementReference = [];

function secondCrazyThing() {
  globalThing.push('x');

  listenerCount.value = listenerCount.value + 1;
}

function crazyThing() {
  for (let i = 0; i < 100; i++) {
    const element = document.createElement('div');

    element.addEventListener('click', () => console.log('something useless'));
    element.innerHTML = `${i}-${globalThing.length}`

    secondCrazyThing();

    dirtyElementReference.push(element);
  }

}

function onAddClick() {
  crazyThing();

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
  width: 50%;
  height: 36px;
  margin: 24px;
}
</style>
