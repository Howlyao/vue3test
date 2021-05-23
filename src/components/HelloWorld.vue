<template>
  <div class="app">
    <el-space direction="vertical">
        <router-link to="/AnimationTest" v-slot="{route}">{{route.fullPath}}</router-link>
        <br/>
        <router-link to="/AnimationTest" custom v-slot="{route}">{{route.fullPath}} custom</router-link>
        <router-link to="/PluginTest">PluginTest</router-link>
        <router-link to="/VuexTest">VuexTest</router-link>
        <router-link to="/ComponentInfoContact">ComponentInfoContact</router-link>
        <router-link to="/WatchEffectTest">WatchEffectTest</router-link>
        <router-link to="/TweenMaxTest">TweenMaxTest</router-link>
        <router-link to="/UserInfo">UserInfo</router-link>
        <router-link to="/LOLPage">LOLPage</router-link>
        <router-link to="/ScorllTest">ScorllTest</router-link>
    </el-space>
    <el-button @click="resizeWindow" type="primary" round>resizeWindow</el-button>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'HelloWorld',
  data() {
    return {
    }
  },
  beforeCreate() {
    console.log(this.msg)
  },
  created() {
    console.log(this.msg)
    console.log(this.$el)
  },
  mounted() {
    console.log(this.$el)
    
  },
  methods: {
    resizeWindow () {
      let width = screen.availWidth
      let height = screen.availHeight
      console.log(width, height, window.innerWidth, window.innerHeight)
      // screenfull.toggle()
      if (!screenfull.isEnabled) {
        this.$message({
          message: "不支持全屏",  
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
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

</style>
