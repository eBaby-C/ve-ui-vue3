<template>
  <div class="ui-stars">
    <span
     v-for="n in 5"
     :key="n"
     :class="['icon-Star', 'iconfont', n <= starNum ? 'active' : '']"
     :style="{ fontSize: `${size}px` }"
     @click="setStarNum(n)"
    ></span>
  </div>
</template>

<script>

import {useStars} from '../hooks';

export default {
  name: 'Stars',
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 19
    }
  },
  setup(props, ctx) {

    const [ starNum, setStarNum ] = useStars(props.num, () => ctx.emit('getStarNum', starNum.value))

    return {
      starNum,
      setStarNum
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont";
  /* Project id 3894074 */
  src: url('//at.alicdn.com/t/c/font_3894074_rymt5sp80ts.woff2?t=1676297914682') format('woff2'),
    url('//at.alicdn.com/t/c/font_3894074_rymt5sp80ts.woff?t=1676297914682') format('woff'),
    url('//at.alicdn.com/t/c/font_3894074_rymt5sp80ts.ttf?t=1676297914682') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;

  &.icon-Star {
    transition: color .3s;
  }

  &.icon-Star:before {
    content: "\e65f";
  }

  &.active {
    color: #F7C943;
  }
}
</style>