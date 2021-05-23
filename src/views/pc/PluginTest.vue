<template>
  <div>
    <el-button @click="clickShow">click</el-button>
  </div>
</template>

<script>
export default {
  name: "PluginTest",
  methods: {
    clickShow () {
      this.$say()
    }
  },
}
</script>

<style scoped>
</style>