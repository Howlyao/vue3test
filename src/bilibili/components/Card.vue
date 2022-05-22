<template>
  <div class="card" :class="[size == 'normal' ? 'card-normal': 'card-big']">
    <div class="img-container">
      <img class="img" :src="img" />
      <!--  -->
      <div class="description">
        <!--  -->
        <van-icon name="play-circle-o" />
        <span class="count">{{ playCount }}</span>
        <van-icon name="comment-o" />
        <span class="count">{{ msgCount }}</span>
        <span class="duration">{{ duration }}</span>
      </div>

    </div>
    <!--  -->
    <div class="info">
      <p class="title" style="-webkit-box-orient: vertical">{{ title }}</p>
      <span class="tag">{{ sectionTag }}·{{ channelTag }}</span>
      <van-icon name="ellipsis" class="setting" color="gray" @click="showPopup"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: Number,
    up: String,
    title: String,
    img: String,
    size: {
      type: String,
      default: 'normal'
    },
    sectionTag: String,
    channelTag: String,
    playCount: Number,
    msgCount: Number,
    duration: String

  },
  emits: ['clickSetting'],
  data() {
    return {
      
    }
  },
  // 
  methods: {
    showPopup () {
      console.log('show popup')
      let obj = {
        id: this.id,
        up: this.up,
        sectionTag: this.sectionTag,
        channelTag: this.channelTag,
        
      }
      this.$emit('clickSetting', obj)
    }
  },
}
</script>

<style lang="less" scoped>
.card {
  box-sizing: border-box;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
  display: inline-block;
  border-radius: 2vw;
  border: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;

  // padding-bottom: 9999px;
  // margin-bottom: -9999px;
 
}
.card-normal {
  width: 47vw;
  // height: 28vh;
  margin: 1vh 1vw; 
}
.img-container {
  position: relative;

  .img {
    width: 100%;
    height: 20vh;
    display: block;
  }

  .description {
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 0.8rem;
    width: 96%;
    padding: 5px;

    * {
      margin-right: 2px;
    }

    .count {
      margin-right: 2vw;
    }

    .duration {
      display: block;
      float: right;
    }
  }
}


.info {
  position: relative;
  padding: 1vh;
  padding-bottom: 1vh;
  .title {
    font-size: 1rem;
    margin: 0;
    
    // overflow: hidden;
    // text-overflow:ellipsis;
    // white-space: nowrap;
    overflow: hidden; 
    display: -webkit-box;    
    -webkit-line-clamp: 2;    
    -webkit-box-orient: vertical;    
    //限制几行 显示文字
  }

  .tag {
    display: inline-block;
    color: gray;
    font-size: 0.8rem;
    margin-top: 5px;
  }

  .setting {
    position: absolute;
    right: 0px;
    bottom: 1vh;
    transform: rotate(90deg);
    font-size: 0.8rem;

    &:hover {
      // color: white;
    }
    
  }
}
</style>