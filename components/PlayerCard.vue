<template>
  <div class="player-card-container w-[450px] rounded-xl ml-[300px] overflow-hidden pb-10 bg-slate-600">
    <!-- Upper Card Part -->
      <div class="upper-card-container bg-[#2e2e2e] text-white">
        <div class="upper-card p-4 flex items-center gap-3">
          <div class="img-container rounded-full bg-white flex justify-center items-center h-[80px] w-[80px] cursor-pointer">
            <img src="../assets/images/WGB-dp.jpg" alt="player image" class="h-[75px] w-[75px] rounded-full">
          </div>      

          <div class="player-name uppercase">
            <h2 class="text-2xl cursor-pointer">Wilton Batiquin</h2>
            <h3 class="text-xl">Dragon</h3>
          </div>

      </div>
      <h1 class="p-3 text-lg font-bold">PLAYER SKILL STATS</h1>
    </div>


    <!-- Lower Card Part -->
    <div class="lower-card bg-[#464646] rounded-b-xl">
      <div class="lower-card-container grid grid-cols-2 grid-rows-2 gap-4 px-5 py-7">        
        <div class="radial-progress" style="--value:0;" role="progressbar">{{state.forehandProgress}}</div>
        <div class="radial-progress" style="--value:20;" role="progressbar">20%</div>
        <div class="radial-progress" style="--value:60; " role="progressbar">60%</div>
        <RadialProgressBar :progressValue="80" />
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import RadialProgressBar from './RadialProgressBar.vue';

const state = reactive({
  forehandProgress: 30 as number,
})




</script>


<style>

.stat-circle
{
  circle.bg
  {
    fill: none;
    stroke: #f1f1f1;
    stroke-width: 2;
  }
  circle.progress
  {
    fill: none;
    stroke: #2ecc71;
    stroke-width: 2;
    stroke-dasharray: 51 51;
    stroke-dashoffset: -51;
    stroke-linecap: round;
  }
  text
  {
    font-size: 3px;
    text-anchor: middle;
    fill: #555;
  }
}

</style>