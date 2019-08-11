<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <div id="title">
          <strong>
            <v-icon id="icon_account">mdi-account</v-icon>사용자 설정
          </strong>
        </div>

        <div class="infoCard">
          <v-card width="750px" class="mx-auto">
            <v-card-title class="card_name">이름</v-card-title>
            <v-card-text class="card_info">{{ user.username }}</v-card-text>
          </v-card>
        </div>

        <div class="infoCard">
          <v-card width="750px" class="mx-auto">
            <v-card-title class="card_name">사용자 ID</v-card-title>
            <v-card-text class="card_info">{{ user.userID }}</v-card-text>
          </v-card>
        </div>

        <div class="infoCard">
          <v-card width="750px" class="mx-auto">
            <v-card-title class="card_name">사용자 이메일</v-card-title>
            <v-card-text class="card_info">{{ user.email }}</v-card-text>
          </v-card>
        </div>

        <div class="infoCard">
          <v-card width="750px" class="mx-auto">
            <v-card-title class="card_name">사용자 부서</v-card-title>
            <v-card-text class="card_info">{{ user.department }}</v-card-text>
          </v-card>
        </div>

        <div class="infoCard">
          <v-card width="750px" class="mx-auto">
            <v-card-title class="card_name">사용자 직책</v-card-title>
            <v-card-text class="card_info">{{ user.position }}</v-card-text>
          </v-card>
        </div>

        <!-- <div class="infoCard">
          <v-card width="750px" class="mx-auto">
            <v-icon id="icon_key">mdi-account-key</v-icon>
            <v-btn id="btn_password" text to="/pswChange" nuxt>비밀번호 변경</v-btn>
          </v-card>
        </div> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  async mounted() {
    const { data } = await this.$axios.$get('/auth/me', {
      headers: {
        'x-access-token': document.cookie.split(';')[0].split('=')[1]
      }
    })
    this.user = data
  }
}
</script>

<style>
#title {
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 30px;
}
#btn_password {
  font-size: 15px;
  font-weight: bold;
}
#icon_key {
  padding-left: 10px;
}
#icon_account {
  font-size: 40px;
}
.card_name {
  font-size: 20px;
  font-weight: bold;
}
.infoCard {
  margin-top: 20px;
}
</style>
