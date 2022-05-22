<template>
    <div class="dialog" v-show="visible" ref="dialogDiv">
      <h1>{{ title }}</h1>
      <hr/>
      <slot class="default"></slot>
      <slot name="footer" ></slot>
      <teleport to="body">
        <div class="mask" v-show="visible"></div>
      </teleport>
    </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    title: String,
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
  },
  emits: ['update:visible'],
  mounted() {
    let oDiv = this.$refs.dialogDiv
    this.setSize(oDiv, this.width, this.height)
  },
  methods: {
    setSize (el, width, height) {
      if (width) {
        el.style.width = width + 'px'
      } 
      if (height) {
        el.style.height = height + 'px'
      } 
    }
  },
}
</script>

<style lang="less" scoped>
.dialog {
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 50%;
  top: 50%; 
  transform: translate(-50%, -50%);
  width: 500px;
  height: 150px;
  background-color: black;
  color: white;
  z-index: 1001;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  
  border: 2px solid gray;
  border-radius: 20px;
  h1 {
    margin: 5px 5px;
    
  }
  .default {
    // flex-grow: 1;
  }

  .el-form {
    margin: 5px 5px;
  }
}
// .dialog div {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
 
//   padding: 5px;
// }

.mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
</style>