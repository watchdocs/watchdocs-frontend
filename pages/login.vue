<template>
  <v-form>
    <v-container>
      <v-layout wrap justify-center>
        <v-flex class="text-center" xs12 sm6>
          <div id="title">
            <strong>
              <v-icon id="icon_key">mdi-account-key</v-icon>로그인
            </strong>
          </div>

          <div class="infoCard">
            <v-card width="750px" class="mx-auto"></v-card>
          </div>

          <v-flex>
            <v-text-field v-model="id" :rules="rules" counter="25" hint="ID" label="ID를 입력하세요."></v-text-field>
          </v-flex>

          <v-flex class="psw">
            <v-text-field
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="비밀번호를 입력하세요."
              hint="비밀번호"
              counter
              class="psw_text"
            ></v-text-field>

            <v-btn block color="secondary" dark @click="login">로그인</v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<style>
#icon_key {
  font-size: 40px;
}
#title {
  padding-top: 30px;
}
.card_psw {
  margin-left: 20px;
  padding: 0px;
}
.textField {
  transform: scale(1);
}
.psw {
  margin-top: 50px;
}
.psw_text {
  margin-bottom: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      show1: true,
      show2: true,
      show3: false,
      show4: false,
      id: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required.'
        // min: v => v.length >= 8 || 'Min 8 characters',
        // emailMatch: () => ('The email and password you entered don\'t match'),
      }
    }
  },
  methods: {
    async login() {
      const { data } = await this.$axios.$post('/auth/login', {
        userID: this.id,
        password: this.password
      })
      if (data) {
        document.cookie = 'token='+data[0]
        document.cookie = 'id='+data[1]
        window.location.href = '/'
      }
    }
  }
}
</script>
