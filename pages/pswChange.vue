<template>
  <v-form>
    <v-container>
      <v-layout wrap justify-center>
        <v-flex class="text-center">
          <div id="title">
            <strong>
              <v-icon id="icon_key">mdi-account-key</v-icon>비밀번호 변경
            </strong>
          </div>

          <div class="infoCard">
            <v-card width="750px" class="mx-auto"></v-card>
          </div>
        </v-flex>
        <v-flex xs12 sm6 class="psw">
          <v-text-field
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="기존 비밀번호를 입력하세요."
            hint="기존 비밀번호"
            counter
            class="psw_text"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="신규 비밀번호를 입력하세요."
            hint="신규 비밀번호"
            counter
            class="psw_text"
          ></v-text-field>

          <v-text-field
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="신규 비밀번호를 다시 입력하세요."
            hint="신규 비밀번호 재입력"
            counter
            class="psw_text"
          ></v-text-field>

          <v-btn block color="secondary" dark @click="change"
            >비밀번호 변경</v-btn
          >
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
      password: '',
      rules: {
        required: (value) => !!value || 'Required.'
        // min: v => v.length >= 8 || 'Min 8 characters',
        // emailMatch: () => ('The email and password you entered don\'t match'),
      }
    }
  },
  async created() {
    const { data } = await this.$axios.$get('/auth/me', {
      headers: {
        'x-access-token': document.cookie.split(';')[0].split('=')[1]
      }
    })
    this.user = data
  },
  methods: {
    change() {
      this.password
      this.$axios.$put(
        `/users/${document.cookie.split(';')[1].split('=')[1]}`,
        { newPassword: this.password }
      )
      window.location.href = '/account'
    }
  }
}
</script>
