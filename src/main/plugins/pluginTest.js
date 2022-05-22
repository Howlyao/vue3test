export default {
  install: (app) => {
    app.config.globalProperties.$say = () => console.log("my Plugin")


    app.mixin({
      created() {
        // some logic ...
      }
      
    })
  }
}