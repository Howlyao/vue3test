<template>
  <div class="user-info-container">
    <div class="top-icon">
      <van-icon  name="scan" />
      <van-icon  name="cart-o" />
      <van-icon  name="edit" />
    </div>
    <van-cell value="空间" center is-link>
      <template #icon>
        <van-image round :src="getUser.img"  
          width="4rem"
          height="4rem"
        />
      </template>
      <template #title>
        <div class="des">
          <span class="username">{{ getUser.username}}</span>
          <span class="level">{{ getUser.level}}</span>
          <p v-if="getUser.isVip" class="vip-msg vip">正式会员</p>
          <p v-else class="vip-msg no-vip">普通会员</p>
          <span class="b-coins coins">B币: {{ getUser.bCoins}}</span>
          <span class="m-coins coins">硬币: {{ getUser.mCoins}}</span>
        </div>
      </template>
    </van-cell>
    <!--  -->
    <van-row class="sub-info">
      <van-col span="7" class="col"><span class="count">{{ getUser.trend}}</span><span class="tip">动态</span></van-col>
      <van-col span="1" class="col"><div class="vr"></div></van-col>
      <van-col span="8" class="col"><span class="count">{{ getUser.subscribe}}</span><span class="tip">关注</span></van-col>
      <van-col span="1" class="col"><div class="vr"></div></van-col>
      <van-col span="7" class="col"><span class="count">{{ getUser.fan}}</span><span class="tip">粉丝</span></van-col>
    </van-row>

    <!--  -->
    <div class="vip-info">
      <h1 class="vip-title">开通大会员</h1>
      <span class="vip-tip">了解更多权益</span>
      <van-icon name="arrow" class="vip-right-icon"/>
    </div>

    <!--  -->
    <div class="function-container">
      <van-row class="function">
        <van-col span="6" class="col"><van-icon name="idcard" class="icon"></van-icon><span class="tip">离线缓存</span></van-col>
        <van-col span="6" class="col"><van-icon name="clock-o" class="icon"></van-icon><span class="tip">历史记录</span></van-col>
        <van-col span="6" class="col"><van-icon name="star" class="icon"></van-icon><span class="tip">我的收藏</span></van-col>
        <van-col span="6" class="col"><van-icon name="play" class="icon"></van-icon><span class="tip">稍后再看</span></van-col>
      </van-row>

      <div class="price-publish">
        <span class="up">UP</span>
        <span class="title">发布你的第一个视频</span>
        <p class="tip">领限定头像挂件，赢活动奖金</p>
        <div class="publish-btn">
          <van-icon name="back-top" />
          <span>有奖发布</span>
        </div>
      </div>

      <div class="recom-service">
        <h1 class="title">推荐服务</h1>
        <van-grid direction="vertical" :column-num="4" :border="false" icon-size="32px">
          <van-grid-item v-for="(item, index) in recomService" 
          :key="index" 
          :icon="item.icon" 
          :text="item.name" 
          icon-color="#ff69b4"
          
        />
         
        </van-grid>
      </div>
      <!-- 更多服务 -->
      <div class="more-service">
        <h1 class="title">更多服务</h1>
        <van-cell is-link v-for="(item, index) in moreService" :key="index" :title="item.name" center title-style="font-size: 1.1em">
          <template #icon>
            <van-icon class="service-icon" :name="item.icon"/>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'UserInfo',
  data() {
    return {
      // 推荐服务
      recomService: [
        {icon: 'scan', name: '我的课程'},
        {icon: 'ascending', name: '免流量服务'},
        {icon: 'audio', name: '个性装扮'},
        {icon: 'award-o', name: '邀好友赚红包'},
        {icon: 'bag-o', name: '我的钱包'},
        {icon: 'balance-list-o', name: '游戏中心'},
        {icon: 'balance-o', name: '会员购中心'},
        {icon: 'bar-chart-o', name: '直播中心'},
        {icon: 'discount', name: '创作中心'},
        {icon: 'down', name: '反馈论坛'},
        {icon: 'delete', name: '充能领福利'},
        {icon: 'debit-pay', name: 'BW游乐园'},
      ],
      moreService: [
        {icon: 'flag-o', name: '联系客服'},
        {icon: 'flower-o', name: '课堂模式'},
        {icon: 'friends-o', name: '青少年模式'},
        {icon: 'gem-o', name: '设置'},
      ]
    }
  },
  methods: {
    getImage () {
      
    }
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getUser',
      // ...
    ])
  }
}
</script>

<style lang="less" scoped>
p, span, h1 {
  margin: 0;
  padding: 0;
}

.user-info-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.top-icon {
  font-size: 2em;
  display: flex;
  justify-content: flex-end;
  padding: 2vw;
  * {
    margin-left: 4vw;
  }
}

.des {
  margin-left: 2vw;
  padding: 2vh;

  .username {
    font-size: 1.4em;
  }
  .level {
    position: relative;
    margin-left: 2px;
    bottom: 2px;
    color: white;
    text-shadow: 0px 0px 2px rgb(47, 255, 151);
  }
  .vip-msg {
    border: 1px solid;
    font-weight: bold;
    border-radius: 4px;
    font-size: 0.8em;
    margin-bottom: 1vh;
    margin-top: 1vh;
    width: fit-content;
    padding: 0 1vw;
  }
  .vip {
    border-color: hotpink;
    color: hotpink;
  }
  .no-vip {
    border-color: gray;
    color: gray;
  }
  .coins {
    color: gray;
  }
  .b-coins {
    margin-right: 2vw;
  }
}

.sub-info {
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .count {
    font-size: 1.2em;
  }
  .tip {
    color: gray;
    font-size: 0.9em;
  }

  //竖线
  .vr {
    height: 60%;
    border-right: 1px solid gray;
  }
}

// 

.vip-info {
  position: relative;
  padding: 10px;
  color: hotpink;
  margin: 10px;
  background: rgb(255, 205, 230);
  border: 1px solid #ff69b4;
  border-radius: 4px;
  border-bottom-color: transparent;
  .vip-title {
    font-size: 1.2em;
    
  }
  .vip-right-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  
}
.vip-right-icon {
  color: #ff69b4;
}


.function-container {
  height: 100%;
  overflow: scroll;
  padding-bottom: 10vh;
  
}
.function {
  text-align: center;
  .col {
    display: flex;
    flex-direction: column; 
    
  }
  .icon {
    font-size: 2em;
    color: rgb(0, 119, 255);
  }
  .tip {
    font-size: 0.9em;
    margin-top: 1vh;
  }
}


.price-publish {
  position: relative;
  border: 1px solid hotpink;
  border-radius: 4px;
  margin: 2vh;
  padding: 2vh;

  .up {
    background: hotpink;
    padding: 2px;
    color: white;
    border-radius: 2px;
    margin-right: 1vw;
  }

  .title {
    font-weight: bold;
  }
  .tip {
    font-size: 0.6em;
    margin-top: 1vh;
    color: gray;
  }

  .publish-btn {
    position: absolute;
    right: 2vw;
    top: 50%;
    transform: translate(0, -50%);
    color: white;
    background: hotpink;
    padding: 1vh;
    border-radius: 80px;
  }
}

.title() {
  .title {
    font-size: 1.4em;
    margin-bottom: 1vh;
  }
}
.recom-service {
  .title();
  padding: 1vh;
}

.more-service {
  .title();
  padding-left: 1vh;
  .service-icon {
    font-size: 2em;
    color: hotpink;
    margin-right: 2vw;
  }

  
}


</style>