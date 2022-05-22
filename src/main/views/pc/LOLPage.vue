<template>
  <div class="container">
    <!-- Add Group Dialog -->
    <my-dialog title="Add Friend Group" v-model:visible="showGroupAddInput">
      <template #default>
        <form class="form">
          <div>
            <label for="groupName" class="form_item">Group Name</label>
            <input class="form_input" type="text" v-model="groupName" name="groupName"/>
          </div>
        </form>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" class="btn" @click="addGroup">Comfirm</el-button>
          <el-button type="primary" class="btn" @click="showGroupAddInput = false">Cancel</el-button>
        </div>
      </template>
    </my-dialog>
    <!-- Choice Dialog -->
    <my-dialog title="Choose the one you like" class="choices_view" v-model:visible="showChoices" :width="800" :height="600">
      <template #default>
        <div class="choices_main">
          <ul class="choices_type">
            <li :class="{'selected': selectType == 0}" @click="changeSelectType(0)"><i class="el-icon-info"></i></li>
            <li :class="{'selected': selectType == 1}" @click="changeSelectType(1)"><i class="el-icon-question"></i></li>
            <li :class="{'selected': selectType == 2}" @click="changeSelectType(2)"><i class="el-icon-circle-plus"></i></li>
          </ul>
          <!--  -->
          <ul v-if="selectType == 0" class="choices">
            <li v-for="(imgSrc, index) in heroChoices" :key="index" @click="changeOverview(index)">
              <img :src="imgSrc"/>
            </li>
          </ul>
          <ul v-else-if="selectType == 1" class="choices">
            <li v-for="(imgSrc, index) in viewChoices" :key="index" @click="changeOverview(index)">
              <img :src="imgSrc"/>
            </li>
          </ul>
          <ul v-else class="choices">
            <li v-for="(imgSrc, index) in attackChoices" :key="index" @click="changeOverview(index)">
              <img :src="imgSrc"/>
            </li>
          </ul>
          <!--  -->
          <div class="overview">
            <img :src="selectChoice" />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" class="btn" @click="changeChoice">Comfirm</el-button>
          <el-button type="primary" class="btn" @click="showChoices = false">Cancel</el-button>
        </div>
      </template>
    </my-dialog>
    <!--  -->
    <section class="section">
      <header class="header">
        <a href="#" class="btn_rank">队列</a>
        <ul class="header_ul_left">
          <li><a href="#" class="li_tag">主页</a></li>
          <li><a href="#" class="li_tag">云顶之弈</a></li>
          <li><a href="#" class="li_tag">冠军杯赛</a></li>
        </ul>
        <ul class="header_ul_right">
          <li><a href="#" class="li_tag">生涯</a></li>
          <li><a href="#" class="li_tag">藏品</a></li>
          <li><a href="#" class="li_tag">战利品</a></li>
          <li><a href="#" class="li_tag">商城</a></li>
        </ul>
      </header>
      <!--  -->
      <article class="article">
        
        <!-- header -->
        <div class="article_header">
          <div class="article_header_left">
            <i class="el-icon-s-help"></i>
            <span>云顶之弈 · 混战</span>
            <i class="el-icon-question i"></i>
          </div>
          <div class="article_header_right">
            <div class="btn_change">更换模式</div>
            <input type="checkbox" v-model="allowJoining" id="aj_checkbox" class="aj_checkbox" />
            <label class="aj_label" for="aj_checkbox" ></label>
          </div>
        </div>

        <!-- Grid -->
        <div class="ranking_grid">
          <div class="grid_main">
            <!--  -->
            <div class="top">
              <a href="#">
                <img class="player_icon" :src="user.icon" />
                <p class="player_level">{{ user.level }}</p>
              </a>
              <p>{{ user.name }}</p>
              <p>{{ user.rankLevel }}</p>
            </div>
            <!--  -->
            <div class="bottom">
              <ul>
                <li v-for="(item, index) in styleChoices" :key="index">
                  <span>{{ item.name }}</span>
                  <a @click="showChoicesView(index)"><img :src="item.imgSrc" /></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Grid item player -->
          <div v-for="(item, index) in grids" :key="index" class="grid_item">
            <div class="grid_player_info" v-if="item.user !== null">
              <img class="player_icon" :src="item.user.icon" />
              <p>{{ item.user.name }}</p>
              <p>{{ item.user.rankLevel }}</p>
              <i class="el-icon-circle-close" @click="kickPlayer(index)"></i>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="article_footer">
          <div class="btn_cancel" @click="cancelSearching">x</div>
          <div class="btn_rank" @click="searchPlayer">寻找队列</div>
        </div>
      </article>
    </section>
    <!--  -->
    <aside class="aside">
      <!-- Person Infomation -->
      <div class="person_info">
        <a href="#" class="a_icon">
          <img class="icon" :src="user.icon"/>
          <span class="level">{{ user.level }}</span>
        </a>
        <div class="person_info_right">
          <p class="p_name">{{ user.name }}</p>
          <p class="p_state">{{ user.state }}</p>
        </div>
        <a herf="#" class="person_bell" @click="routerToMsg"> 
          <i class="el-icon-message-solid" v-if="user.hasState"></i>
          <i class="el-icon-bell" v-else></i>
        </a>
      </div>
      <!-- Wait list -->
      <div class="wait_list">
        <div v-if="isSearching">
          <span>正在寻找对局</span>
          <div class="main">
            <i class="el-icon-bell"></i>
            <h1>{{ time }}</h1>
            <h2>预计时间: 1.56</h2>
          </div>
          <i class="el-icon-circle-close" @click="cancelSearching"></i>
        </div>
      </div>
      <div class="friend">
        <!-- Group add input dialog -->
        <!-- Friend Head -->
        <div class="friend_list_head">
          <span>好友列表</span>
          <div class="friend_list_func">
            <a href="javascript:void(0);"><i class="el-icon-s-custom"></i></a>
            <a href="javascript:void(0);" @click="showGroupAddInput = true"><i class="el-icon-folder-add"></i></a>
            <a href="javascript:void(0);" ><i class="el-icon-menu"></i></a>
            <a href="javascript:void(0);"><i class="el-icon-search"></i></a>
          </div>
        </div>
        <div class="friend_request">
          <span>好友邀请</span>
          <div>{{ friend.request }}</div>
        </div>
        <!-- Friend list -->
        <div class="friend_list">
          <ul class="group_list_ul">
            <!-- Groups -->
            <li class="group_list_item" v-for="(group, index1) in groups" :key="index1"  :data-key="index1">
              <!-- Group Tag -->
              <div class="group_tag" @click="group.isShow = !group.isShow">
                <!-- Arrow Change -->
                <i v-if="group.isShow" class="el-icon-caret-bottom"></i>
                <i v-else class="el-icon-caret-right"></i>
                <!-- Group Title -->
                <span class="group_title">{{ group.title }}</span>
              </div>
             
              <!-- Friend list ul -->
              <ul class="friend_list_ul" v-show="group.isShow">
                <li class="friend_list_item" v-for="(friend, index2) in group.friends" :key="index2" v-drag="[dragEvent, index1, index2]">
                  <!-- Friend Info -->
                  <!-- icon -->
                  <img class="icon" :src="friend.icon"/>
                  <div class="icon_badge" :class="[friend.state == 'idle' ? 'idle': 'busy']"></div>
                  <!-- text -->
                  <div class="friend_info_right">
                    <p class="f_name">{{ friend.name }}</p>
                    <p v-if="friend.state !== 'idle'" class="f_state">{{ friend.state }}</p>
                    <p v-else class="f_tag">"{{ friend.tag }}"</p>
                  </div>
                </li>
              </ul>

            </li>
          </ul>
        </div>
      </div>
      <!-- <div style="width: 400px;height: 400px; background: red" v-drag="dragEvent">

      </div> -->
      <div class="aside_footer">
        <i class="el-icon-chat-dot-square"></i>
        <i class="el-icon-copy-document"></i>
        <i class="el-icon-microphone"></i>
        <i class="el-icon-setting"></i>
      </div>
    </aside>
  </div>
</template>

<script>
import MyDialog from '@/main/components/MyDialog'

export default {
  name: 'LOLPage',
  components: {
    'my-dialog': MyDialog
  },
  mounted() {
    // document.addEventListener('click', (e) => {
    //   console.log(document.elementsFromPoint(e.clientX, e.clientY))
    // })
    for (let i = 0; i < 7; i++) {
      let obj = {user: null }
      this.grids.push(obj)
    }
    let user = Object.assign({}, this.user)
    this.grids[0].user = user

    //
    console.log(process.env)
  },
  data() {
    return {
      user: {
        name: 'Howlyao',
        level: 0,
        // icon: require('@/assets/logo.png'),
        icon: '/logo.png',
        state: '1/8 排位赛(云顶之弈)',
        rankLevel: '钻石5',
        hasState: true
      },

      isSearching: false,
      time: '0: 00',
      timer: null,
      friend: {
        request: 5
      },
      groups: [
        {
          title: '综合',
          isShow: false,
          friends: [
            {
              icon: './logo.png',
              name: 'Howlyao',
              state: 'idle',
              tag: 'Hahaha'
            },
            {
              icon: './2.jpg',
              name: 'Liu',
              state: 'ranking',
              tag: 'Hahaha'
            },
          ]
        },
        {
          title: 'Group1',
          isShow: false,
          friends: [
            {
              icon: './logo.png',
              name: 'WO',
              state: 'idle',
              tag: 'ffff'
            },
          ]
        }
      ],
      // 
      showGroupAddInput: false,
      groupName: '',
      // 

      allowJoining: false,
      grids: [],
      showChoices: false,
      selectType: 0,
      selectChoice: 0,
      styleChoices: [
        {
          name: '小小英雄',
          imgSrc: './1.jpg'
        },
        {
          name: '期盼皮肤',
          imgSrc: './2.jpg'
        },
        {
          name: '进攻特效',
          imgSrc: './1.jpg'
        },
      ],
      // mounted loaded
      heroChoices: ['./1.jpg', './2.jpg', './1.jpg'],
      viewChoices: ['./2.jpg', './1.jpg', './2.jpg'],
      attackChoices: ['./1.jpg', './2.jpg', './2.jpg']


      
    }
  },
  directives: {
    drag: {
      // 指令的定义
      created(el, binding) {
        let oDiv = el   //获取当前元素
        let callback = binding.value[0]
        
        oDiv.addEventListener('mousedown', (e) => {

          let copyDiv = oDiv.cloneNode(true)
          let parent = oDiv.parentNode
          parent.insertBefore(copyDiv, oDiv)
          
          // 透明拷贝
          copyDiv.style.position = 'absolute'
          copyDiv.style.left = oDiv.offsetLeft + 'px'
          copyDiv.style.top = oDiv.offsetTop + 'px'
          // copyDiv.style.backgroundColor = 'green'
          copyDiv.style.opacity = 0.3
          copyDiv.style.width = 214 + 'px'

          let disX = e.clientX - oDiv.offsetLeft
          let disY = e.clientY - oDiv.offsetTop

          document.onmousemove = (e)=>{
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;    
            let top = e.clientY - disY;
            
            //绑定元素位置到positionX和positionY上面
            // copyDiv.positionX = top;
            // copyDiv.positionY = left;
            
            // console.log(left + ' ' + top)
            //移动当前元素
            copyDiv.style.left = left + 'px'
            copyDiv.style.top = top + 'px'
          };
          document.onmouseup = (e) => {
            callback(oDiv, copyDiv, e, binding)
            document.onmousemove = null
            document.onmouseup = null
        };

        })
        
      }
  }
  },
  methods: {
    routerToMsg () {
      this.user.hasState = false
    },
    // add Group
    addGroup () {
      let groupName = this.groupName
      if (groupName.length === 0) {
        this.$notify({
          message: 'Please input group name',
          position: 'bottom-left'
        });
      } else {
        // test reg
        let group = {
          title: groupName,
          isShow: false,
          friends: []
        }
        this.groups.push(group)
        this.showGroupAddInput = false
      }
    },
    // Mouse down   put the item into the correct position
    dragEvent (oldEl, newEl, e, binding) {
      console.log('dragEvent evoke')
      let [, index1, index2] = binding.value
      // console.log(index1, index2)
      let elements = document.elementsFromPoint(e.clientX, e.clientY)
      for (let el of elements) {
        if (el.className.includes('group_list_item')) {
          // console.log(el.className.includes())
          // this.group
          let groupKey = el.getAttribute('data-key')
          if (groupKey == index1) {
            break
          } else {
            let friendItem = this.groups[index1].friends.splice(index2, 1)[0]
            this.groups[groupKey].friends.unshift(friendItem)
          }

        } 
      }
      oldEl.parentNode.removeChild(newEl)
    },
    // kickPlayer
    kickPlayer (index) {
      this.grids[index].user = null
    },
    //
    changeSelectType (type) {
      this.selectChoice = this.styleChoices[type].imgSrc
      this.selectType = type
    },
    showChoicesView (index) {
      this.showChoices = true
      this.selectType = index
      this.selectChoice = this.styleChoices[index].imgSrc
    },
    changeOverview (index) {
      let type = this.selectType
      if (type == 0) {
        this.selectChoice = this.heroChoices[index]
      } else if (type == 1) {
        this.selectChoice = this.viewChoices[index]
      } else {
        this.selectChoice = this.attackChoices[index]
      }
    },
    changeChoice () {
      this.styleChoices[this.selectType].imgSrc = this.selectChoice
      this.showChoices = false
    },

    // 
    searchPlayer () {
      this.isSearching = true
      let oldTime = Date.now()
      let min, sec
        
      this.timer = setInterval(() => {
        let newTime = Date.now()
        let offsetTime = newTime - oldTime
        let d = new Date(offsetTime)
        min = d.getMinutes()
        sec = d.getSeconds()
        this.time = min + ' : ' + new String(sec).padStart(2, '0')
      }, 1000)
    },
    cancelSearching () {
      this.isSearching = false
      clearInterval(this.timer)
      this.timer = null
      this.time = '0: 00'
    },
    //

   
  },
}
</script>

<style lang="less" scoped>
@import './LOLPage.less';

</style>
