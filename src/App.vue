<template>
  <div>
    <Stars
      :num="starState.num"
      :size="starState.size"
      @getStarNum="getStarNum"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';


  const getStarNum = n => console.log(n);

  const starState = reactive({
    num: 3,
    size: 40
  })
  
</script>

<style lang="scss" scoped>

</style>