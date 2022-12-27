<template>
  <div>
    <div id="scene-container" ref="sceneContainer" />
  </div>
</template>

<script setup lang="ts">
import { World } from '~~/components/objects/world';
import { ref, onMounted } from 'vue';

const sceneContainer = ref(null);

onMounted(() => {
  // the DOM element will be assigned to the ref after initial render
  // Create an instance of the World app
  const world = new World(sceneContainer.value);

  // Start the loop (produce a stream of frames)
  // world.start();
});
</script>

<style lang="scss" scoped>
#scene-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
