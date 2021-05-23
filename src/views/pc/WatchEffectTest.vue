<template>
  <div></div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  name: 'WatchEffectTest',
  setup() {
    const count = ref(0)

    watchEffect(() => console.log(count.value))
    // -> logs 0

    setTimeout(() => {
      count.value++
      // -> logs 1
    }, 100)
  }
}
</script>

<style scoped>

</style>