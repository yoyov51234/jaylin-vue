<script setup>
import { ref } from 'vue'
const phone = ref(null)
const pwd = ref(null)

const userLogin = async () => {
  const loginURL = 'https://auth.jaylinh.com/api/auth/login'
  try {
    const res = await fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        telephone: phone.value,
        credential: pwd.value,
        type: 'password'
      })
    })
    // console.log(res)
    /* 
    body
: 
(...)
bodyUsed
: 
true
headers
: 
Headers {}
ok
: 
true
redirected
: 
false
status
: 
200
statusText
: 
"OK"
type
: 
"cors"
url
: 
"https://auth.jaylinh.com/api/auth/login"*/

    if (res.ok) {
      console.log(res.json())
      const data = await res.json()
      if (data.code == 200) {
        console.log('Login successfully')
      }
    } else {
      console.log('NOT SUCCESS')
    }
  } catch (error) {
    console.error('error')
  }
}
</script>

<template>
  <div class="mengban">
    <div class="login">
      登录
      <div class="login-core">
        <div>
          <label for="phone"> 手机号</label>
          <br />
          <input type="text" id="phone" class="inputs" v-model="phone" />
        </div>
        <div>
          <label for="pwd"> 密码</label>
          <br />
          <input type="password" id="pwd" class="inputs" v-model="pwd" />
        </div>

        <div class="register-forget">
          <a href="" class="links">注册</a>
          <a href="" class="links">忘记密码</a>
        </div>
      </div>
      <button class="lgbtn" @click="userLogin">登录</button>
    </div>
  </div>
</template>

<style scoped>
.mengban {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  width: 392px;
  background-color: #ffffff;
  padding-inline: 56px;
  padding-block: 66px;
  /* background: #FFFFFF; */
  box-shadow: 0px 2px 40px 0px rgba(91, 92, 108, 0.3);
  border-radius: 16px;
}

.login-core {
  margin-bottom: 32px;
}

.inputs {
  outline: none;
  border: none;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid lightblue;

  padding-block: 10px;
}
.inputs:first-child {
  margin-bottom: 24px;
}

.inputs:last-child {
  margin-bottom: 8px;
}
.register-forget {
  display: flex;
  justify-content: space-between;
}

.register-forget a {
  color: #0079fa;
  text-decoration: none;
}

.lgbtn {
  background: #0079fa;
  border-radius: 30px;
  color: #ffffff;
  width: 100%;
  padding-block: 10px;
  border: none;
}
</style>
