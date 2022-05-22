<template>
  <div class="container-mainpage">
    <!--  -->
    <van-row align="center">
      <van-col span="4">
        <van-image
          round
          width="3rem"
          height="3rem"
          :src="user.icon"
          class="h-center"
          @click="toUserInfo"
        />
      </van-col>
      <van-col span="14">
        <van-search
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
        />
      </van-col>
      <van-col span="3" ><van-icon name="fire-o" :badge="user.playMsgLength" size="2rem" class="h-center"/></van-col>
      <van-col span="3" ><van-icon name="envelop-o" :badge="user.msgLength" size="2rem" class="h-center"/></van-col>
    </van-row>
    <!--  -->
    <van-tabs v-model:active="selectType" @click="onChangeTab" sticky>
      <van-tab title="直播" >
       
      </van-tab>
      <!--  -->
      <van-tab title="推荐" >
         <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
          <van-list
            v-model:loading="state.loading"
            :finished="state.finished"
            finished-text="no more"
            @load="onLoad"
          >
            <card v-for="(item, index) in state.list" 
              :id="item.id"
              :up="item.up"
              :title="item.title"
              :img="item.img"
              :sectionTag="item.sectionTag"
              :channelTag="item.channelTag"
              :playCount="item.playCount"
              :msgCount="item.msgCount"
              :duration="item.duration"
              :key="index"
              @clickSetting="showPopup($event)"
            >
            </card>

          </van-list>
          <!-- 举报弹窗 -->
          <van-popup
            v-model:show="popupVisible"
            round
            position="bottom"
            class="report-popup"
          >
            <div class="report-container">
              <!-- 添加至稍后再看 -->
              <van-cell is-link>
                <template #title>
                  <van-icon name="play"/>
                  <span class="span-add">添加至稍后再看</span>
                </template>
                <template #right-icon>
                </template>
              </van-cell>
              <hr/>
              <!-- 反馈 -->
              <div class="feedback-container">
                <span class="title">反馈</span>
                <span class="tip">(选择后将优化首页此类内容)</span>
                <div class="btn-container">
                  <van-button type="default" v-for="(title, index) in reportTitles" :key="index" @click="report(index, 0)">{{ title }}</van-button>
                </div>
               
              </div>
              <hr/>
              <!-- 不感兴趣 -->
               <div class="feedback-container">
                <span class="title">不感兴趣</span>
                <span class="tip">(选择后将减少相似内容推荐)</span>
                <div class="btn-container">
                  <van-button type="default" v-for="(title, index) in unconcernedTitles" :key="index" @click="report(index, 1)">{{ title }}</van-button>
                </div>
               
              </div>
            </div>
            <van-button type="default" size="large">取消</van-button>
          </van-popup>
        </van-pull-refresh>
      </van-tab>
      <!--  -->
      <van-tab title="热门">内容 3</van-tab>
      <van-tab title="追番">内容 4</van-tab>
      <van-tab title="影视">内容 4</van-tab>
      <van-tab title="建党百年">内容 4</van-tab>
    </van-tabs>
    
  </div>
  
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'MainPage',
  components: {
    'card': Card
  },
  mounted() {
    this.onLoad()
  },
  data() {
    return {
      selectType: 1,
      user: {
        icon: '/1.jpg',
        msgLength: 1,
        playMsgLength: null
      },
      types: ['live', 'recommend', 'hot', 'cartoon', 'movie', 'nation'],
      // 下拉更新 和 下滚更新 状态
      state: {
        list: [],
        loading: false,
        finished: false,
        refreshing: true,
      },
      sectionTag: ['日常', '明星', '综艺', '影视杂谈'],
      channelTag: ['生活记录', '盛世美艳', '女团', '活死人军团'],
      title: ['黄子华栋笃笑', '原神PV', '这种房间我承受不了一秒这种房间我承 受不了一秒这种房间我承受不了一秒', '钢之炼金术师'],

      // 举报 弹窗
      popupVisible: false,
      // 
      reportTitles: ['恐怖血腥', '色情低俗', '封面恶心', '标题党/封面党'],
      unconcernedTitles: [,,,'不感兴趣'],
      // 
      reportItem: null,
    }
  },

  // 
  methods: {
    onRefresh () {
      // 清空列表数据
      let state = this.state
      state.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      state.loading = true
      this.onLoad()
    },
    onLoad () {
      let state = this.state
      if (state.refreshing) {
          state.list = [];
          state.refreshing = false;
        }
      
      // load info
      setTimeout(() => {
        let list = []
        for (let i = 0; i < 10; i++) {
          let obj = {}
          let index = (i % 4 + 1)

          obj.id = i
          obj.up = 'Howlyao'
          obj.title = this.title[index - 1]
          obj.img = '/' + index + '.jpg'
          obj.channelTag = this.channelTag[index - 1]
          obj.sectionTag = this.sectionTag[index - 1]
          obj.playCount = Math.floor(Math.random() * 10000)
          obj.msgCount = Math.floor(Math.random() * 1000)
          let time = new Date(Math.random() * 100000)
          let second = String(time.getSeconds()).padStart(2, '0')
          obj.duration = `${time.getMinutes()}:${second}`

          state.list.push(obj)
        }
        // state.list = list
        state.loading = false
      }, 1000)
      

      // 无限制下滚
      // if (state.list.length >= 40) {
      //   state.finished = true;
      // }
    },
    onChangeTab () {

    },

    // 初始化
    showPopup (obj) {
      this.reportItem = obj
      console.log('video id: ' + obj.id)
      this.unconcernedTitles[0] = `UP主:${obj.up}`
      this.unconcernedTitles[1] = `分区:${obj.sectionTag}`
      this.unconcernedTitles[2] = `频道:${obj.channelTag}`
      // this.unconcernedTitles[3] = `不感兴趣`

      this.popupVisible = true
    },
    report (index, type) {
      if (type === 0) {
        let reason = this.reportTitles[index]
      }
      //  
      // sendFeedback(this.reportItem.id, reason)
    },
    
    // 
    toUserInfo () {
      this.$router.push({name: 'UserInfo'})
    }
  },
}
</script>

<style lang="less" scoped>
.h-center {
  margin: 0 10px;  
  /*  */
}

.report-popup {
}
.report-container {
  padding: 0 4%;

  .span-add {
    margin-left: 10px;
    font-size: 1rem;
  }

}
.feedback-container {
  .tip {
    font-size: 0.9rem;
    color: gray;
    margin-left: 1vw;
  }
  .btn-container {
    margin-top: 2vh;
  }
  .van-button--default{
    width: 42vw;
    margin: 1vh 2vw;
  }
}

</style>