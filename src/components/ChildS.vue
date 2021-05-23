<template>
  <div class="child-test">
    <fieldset>
      <legend>ChildS</legend>
      <p>isVModel: {{isVModel}}</p>
      <input type="text" @change="makeValueChange($event)" :class="{hide: isVModel}"/>
      <input type="text" @input="$emit('update:modelValue', $event.target.value)" :class="{hide: !isVModel}"/>
      <!-- <slot></slot> -->
      <p class="child-sub">{{inputValue}}</p>
      <button @click="summit">{{ injectText }}</button>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'child-s',
  // v-model 设置
  // model: {
  //   prop: 'modelValue',
  //   event: 'update:modelValue'
  // },
  props: {
    inputValue: {
      type: String,
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    modelValue: String,
    isVModel: Boolean,
    // injectText: this.getInjectText()
  },
  inject: ['getInjectText'],
  // emits: ['update:modelValue', 'summit'],
  emits: {
    'update:modelValue': null,
    'summit': () => {
      console.log('summit')
      let flag = false
      if (flag) {
        return true
      } else {
        return false
      }
      // return true
    }
    // 'summit': null
  },
  data: function () {
    return {
    }
  },
  computed: {
    injectText () {
      return this.getInjectText()
    }
  },
  methods: {
    makeValueChange (e) {
      let value = e.target.value
      this.$emit('update:modelValue', value)
    },
    summit () {
      this.$emit('summit');
    }
  }
}
</script>

<style scoped>
.child-test {
  margin: 10px auto;
}
.child-sub {
  border: 1px solid red;
}
.hide {
  display: none;
}
</style>
