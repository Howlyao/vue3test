<template>
  <div class="hello">
    <div class="test-father-child">
      <child-s :input-value="inputValue" :isVModel="false" :model-value="msgChild" @update:model-value="msgChild = $event" ></child-s>
      <child-s :input-value="inputValue" :isVModel="true" v-model="msgChild" @summit="summitTest" >{{testValue}}</child-s>
      <p>msgChild: {{msgChild}}</p>
      <p>newData: {{item.flag}}</p>
    </div>
    <div class="operation">
      <input type="button" @click="addNewData" value="AddNewData"/>
      <input type="button" @click="inputValue = 'warning'" value="ChangeInputValue"/>
      <input type="text" v-model="provideText" />
    </div>
  </div>
</template>

<script>
import ChildS from '@/main/components/ChildS.vue'
// import { computed } from 'vue'

export default {
  name: 'ComponentInfoContact',
  components: {
    ChildS
  },
  data () {
    return {
      msgChild: '',
      inputValue: '输入值',
      item: {
        },
      testValue: 'testValue',
      provideText: 'injectText'
    }
  },
  provide () {
    return {
      // injectText: computed(() => this.provideText)
      //响应式provide
      getInjectText: () => this.provideText
    }
  },
  created: function () {
    console.log('created')
  },
  mounted: function () {
  },
  methods: {
    addNewData () {
      // this.$set(this.$data, 'newData', 'new')
      // this.$set(this.item, 'flag', true)
      this.item.flag = true;
    },
    summitTest () {
      console.log('father summit')
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
.operation {
  width: 400px;
  height: 400px;
  position: relative;
  margin: 50px auto 0px;
  border: 1px solid black;
  border-radius: 10px;
}
input {
  display: block;
  margin: 10px auto 10px;
}
p {
  width: 200px;
  border: 1px dashed black;
  margin: 5px auto;
}
</style>
