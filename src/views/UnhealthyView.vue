<script setup>

function onAddClick() {
  window.addEventListener('click', () => {
    const bigArrayBuffer = new ArrayBuffer(2 ** 20 - 1);

    if (!window.dirtyThing) { window.dirtyThing = [] }

    window.dirtyThing.push(bigArrayBuffer);
  })
}

</script>

<template>
  <main>
    <button @click="onAddClick">ADD</button>
  </main>
</template>

<style>
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
