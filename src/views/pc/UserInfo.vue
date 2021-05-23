<template>
  <div class="form">
    <el-form :form="user" label-width="80px">
      <el-form-item label="Name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="Age">
        <el-input-number v-model="user.age" controls-position="right" :min="1" :max="100"></el-input-number>
      </el-form-item>
      <el-button @click="addUser()">Add User</el-button>
    </el-form>

    <el-form label-width="80px">
      <el-form-item label="Id">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <span>Name: {{ user_get.name }}  Age: {{ user_get.age }}</span>
      <el-button @click="getUser(id)">Get User</el-button>
    </el-form>
    <el-upload
      ref="upload"
      class="avatar-uploader"
      action="/api/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-change="loadImage"
      :auto-upload="false"
      >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-button type="primary" @click="uploadSubmit">Upload</el-button> 
    <img src="http://localhost:3000/public/uploads/1619507604981.jpg" />
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      user: {
        name: '',
        age: 0,
        img: ''
      },
      id: null,
      user_get: {
        name: '',
        age: null
      },
      // image
       imageUrl: ''
    }
  },
  methods: {
    // 
    addUser () {
      let _user = this.user;
      let _this = this;
      // this.$axios.post('/user', _user)
      //   .then((res) => {
      //     if (res.status === 200) {
      //       console.log('success')
      //     } else {
      //       console.log('fail')
      //     }
      //   })
      _user.img = this.imageUrl
      let formData = new FormData()
      for (let [key, value] of Object.entries(_user)) {
        if (key !== 'img') {
          formData.append(key, value)
        } else {
          formData.append(key, _this.dataURLtoBlob(value))
        }
      }
      this.$axios.post('/user', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
        .then((res) => {
          if (res.status === 200) {
            console.log('success')
          } else {
            console.log('fail')
          }
        })

    },
    // 
    getUser(id) {
      let _this = this;
      if (id) {
        this.$axios.get('/user', {
          params: {
            id: id
          }
        }).then(res => {
          if (res.status === 200) {
            let data = res.data
            // console.log(data)
            _this.user_get = data
            console.log('get user succeed')
          } else {
            console.log('get user fail')
          }
        })
      }
    },
    // data URL to Blob
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});
    },
    // blob to URL
    blobToDataURL (blob, callback) {
      let reader = new FileReader()
      reader.onload = function (e) {
        callback(e.target.result)
      }
      reader.readAsDataURL(blob)
    },
    // Image
    loadImage(file) {
      let _this = this;
      if (file) {
        //create URL
        // this.imageUrl = URL.createObjectURL(file.raw)
        
        // fileReader
        _this.blobToDataURL(file.raw, (dataURL) => {
          _this.imageUrl = dataURL
          console.log(_this.dataURLtoBlob(dataURL))
        })
      }
    },
    handleAvatarSuccess (res, file) {
      // console.log(this.imageUrl)
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log('success upload')
    },

    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 手动upload
    uploadSubmit () {
      this.$refs.upload.submit()
    }
  },
}
</script>

<style lang="less" scoped>
.form {
  width: 400px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid black;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>