<template>
  <div>
    <el-space direction="vertical">
      <el-space>
        <el-checkbox-group v-model="checkList">
          <el-checkbox v-for="(item, index) in getItems" :label="item" :key="index">{{ item }}</el-checkbox>
        </el-checkbox-group>
      </el-space>
      <el-space direction="vertical">
        <el-tooltip effect="dark" content="Empty input" placement="right-start" :disabled="inputValue != ''"> 
          <el-input v-model="inputValue" placeholder="请输入内容" clearable></el-input>
        </el-tooltip>
        <el-button @click="addItem(inputValue)">addItem</el-button>
        <span>{{ checkList }}</span>
        <p>{{ getItems }}</p>
      </el-space>
    </el-space>
  </div>  
</template>


<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'VuexTest',
  data() {
    return {
      checkList: [],
      inputValue: '',
      isShow: false
    }
  },
  methods: {
    ...mapActions([
      'addItem'
    ])
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getItems',
      'getItemsLength',
      // ...
    ])
  }
}
</script>

<style lang="less" scoped>

</style>