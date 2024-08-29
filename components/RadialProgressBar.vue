<template>
  <div>
    <div class="radial-progress progress-color" :style="`--value:${props.progressValue}`" role="progressbar">{{progressValue}}</div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    progressValue:{
      type:Number,
      default:0
    }
  })
</script>

<style>

</style>