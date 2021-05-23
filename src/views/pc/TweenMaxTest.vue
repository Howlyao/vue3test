<template>
  <div>
    <div class="red" ref="red" @click="moveDiv($event)"></div>
    <div class="green" ref="green" @click="moveDiv($event)"></div>
    <el-button type="primary" @click="move">Move</el-button>
    <el-button type="primary" @click="moveTimeLine">moveTimeLine</el-button>
    <el-input-number v-model="num" ></el-input-number>
    <span> {{ tweenNum }} </span>
  </div>  
</template>

<script>
import { TweenMax } from 'gsap'
import { TimelineLite } from 'gsap'
import { TimelineMax } from 'gsap'

export default {
  name: 'TweenMaxTest',
  data() {
    return {
      items: [1, 2, 3, 4],
      num: 0,
      tweenNum: 0
    }
  },
  methods: {
    move () {
      let el = this.$refs.red;
      TweenMax.to(el, 1, {background: 'green'})
      TweenMax.to(el, 1, {x: 80, y: 120})
      let t = new TimelineLite()
      t.to(el, 1, {x: 100, y: 200}).to(el, 1, {x: 80, y: 120})
    },
    moveTimeLine () {
      var myTween = TweenMax.to('.red', 2, {x:400});
      var tl = new TimelineLite(); 
      tl.to('.green', 3, {x:300, rotation:360});

      new TimelineMax({tweens: [myTween, tl]});

    },
    moveDiv (event) {
      let tar = event.target
      TweenMax.to(tar, 1, {x: 100, y: 200})
    },
  },
  watch: {
    num(newValue) {
      TweenMax.to(this.$data, 0.5,{tweenNum: newValue})
    }
  }
}
</script>
<style lang="less" scoped>
.div () {
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-left: 20px;

}
.red {
  .div();
  background: red;
}

.green {
  .div();
  background: green;
}

</style>


