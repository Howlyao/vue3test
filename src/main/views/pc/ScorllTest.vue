<!--
 * @Author: howlyao 741368914@qq.com
 * @Date: 2021-05-23 16:55:12
 * @LastEditors: howlyao 741368914@qq.com
 * @LastEditTime: 2022-05-20 15:38:36
 * @FilePath: \vue3test\src\main\views\pc\ScorllTest.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <ul class="ul_img">
      <li v-for="(imgSrc, index) in imgs" :key="index">
        <img :src="imgSrc"/>
      </li>
    </ul>
    <!-- <img src="@/assets/1.jpg"/> -->
  </div>
</template>

<script>
export default {
  name: 'ScorllTest',
  mounted() {
    this.loadImage(6)
    let scrollJudge = this.debounce(500, this.scrollImageLoad)
    // true  is  key
    window.addEventListener('scroll', function () {
      // console.log(document.documentElement.scrollTop)
      scrollJudge()
    }, true)
  },
  data() {
    return {
      imgDB: ['1.jpg', './2.jpg', './4.jpg', './3.jpg', './logo.png'],
      imageDBLength: 0,
      imgs: []
    }
  },
  methods: {
    loadImage (times) {
      this.imageDBLength = this.imgDB.length
      let length = this.imageDBLength
      for (let i = 0; i < times; i++) {
        let index = Math.floor(Math.random() * length)
        this.imgs.push(this.imgDB[index])
      }
    },
    debounce (time, callback) {
      let id
      return function () {
        if (id) {
          clearTimeout(id)
        }
        id = setTimeout(callback, time)
      }
    },
    scrollImageLoad () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // let imgHeight = 400
      let offset = 10
      let offsetHeight = document.documentElement.offsetHeight
      console.log(scrollTop + ' ' + offsetHeight + ' ' + scrollHeight)
      if ((scrollTop + offsetHeight) + offset >= scrollHeight) {
        this.loadImage(3)
      }
    }
  },
  computed: {
    scrollLength() {
      return '1'
    }
  }
  // watch()
}
</script>

<style lang="less" scoped>
.ul_img {
  list-style: none;
  li {
    display: inline-block;
    img {
      width: 400px;
      height: 400px;

    }
    
  }
}

</style>