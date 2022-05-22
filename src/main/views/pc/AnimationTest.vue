<template>
  <div class="hello">
    <!-- 添加删除item动画 -->
    <transition-group tag="ul" name="list" appear>
      <li v-for="item in items" :key="item.id" class="list-li">
        {{ item.text }}
      </li>
    </transition-group>
    <button v-on:click="doClick">add</button>
    <button v-on:click="remove">remove</button>
    <!-- in-out -->
    <div class="hello">
      <transition name="fade" mode="in-out">
        <p :key="ok">{{ok}}</p>
      </transition>
      <button v-on:click="change">change</button>
    </div>
    <!-- Veloctiy -->
    <transition
        name="move"
        @enter="handleEnter"
    >
      <div id="move-block" ref="div1"></div>
    </transition>
    <!-- <span>{{date | date}}</span> -->
    <button @click="handleEnterRef">click</button>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
name: 'AnimationTest',
data () {
  return {
    items: [
      {id: 1, text: '11'},
      {id: 2, text: '22'},
      {id: 3, text: '33'},
      {id: 4, text: '44'}
    ],
    ok: true,
    date: new Date(),
    word: 'downcase'
  }
},
methods: {
  doClick: function () {
    let length = this.items.length
    let ch = (length + 1).toString()
    let item = {id: length + 1, text: ch + ch}
    this.items.push(item)
    console.log(this.items)
  },
  // remove item
  remove: function () {
    let length = this.items.length
    this.items.splice(length - 1, 1)
    console.log(this.items)
  },
  change: function () {
    this.ok = !this.ok
  },
  handleEnter (el, done) {
    console.log('enter')
    Velocity(el, {backgroundColorAlpha: 0.5}, {duration: 2000, complete: done})
    Velocity(el, {backgroundColor: '#FF0000'}, {duration: 2000, complete: done})
    Velocity(el, {width: '200px'}, {duration: 2000, complete: done})
  },
  handleEnterRef () {
    console.log('enter1')
    let el = this.$refs.div1
    Velocity(el, {backgroundColorAlpha: 0.5}, {duration: 2000})
    Velocity(el, {backgroundColor: '#FF0000'}, {duration: 2000})
    Velocity(el, {width: '200px'}, {duration: 2000})
  }
},
filters: {
  date: function (value) {
    if (!(value instanceof Date)) return value
    return value.toLocaleDateString()
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
.list-li {
width: 100px; height: 20px;
transform: translate(0, 0);
}
.list-enter-from, .list-leave-to {
opacity: 0; transform: translate(-100px, 0);
}
.list-enter-active, .list-leave-active {
transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
opacity: 0;
}
.fade-enter-active, .fade-leave-active {
transition: all 2s ease;
}
#move-block {
width: 100px;
height: 100px;
background: blue;
}

</style>
