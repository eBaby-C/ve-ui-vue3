<template>
  <Stars :default-num="starNum" :size="size" @getStarNum="getStarNum" />
</template>

<script>

export default {
  name: 'App',
  setup() {
    const getStarNum = (num) => {

    }


    return {
      getStarNum
    }
  },

}
</script>

<style lang="scss">

</style>
