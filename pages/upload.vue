<template>
  <v-container grid-list-md>
    <strong>
      <h1 class="display-1" style="margin-top:20px">파일 업로드</h1>
    </strong>
    <br />
    <h4 class="subtitle-1">업로드 하실 파일을 선택해 주세요</h4>
    <h4 class="subtitle-1">파일 코드를 입력해 주세요</h4>
    <br />
    <v-layout wrap>
      <v-flex xs12 sm8>
        <v-card flat>
          <v-file-input label="Choose Uploading File"></v-file-input>

          <v-text-field
            v-model="first"
            label="FILE UPLOAD CODE"
            filled
          ></v-text-field>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <v-card flat>
          <v-list-item>
            <v-icon style="font-size: 25px; margin-right:30px;"
              >mdi-account-circle</v-icon
            >
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                author.name
              }}</v-list-item-title>
              <v-list-item-subtitle>@{{ author.id }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list two-line>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-card-text</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Department</v-list-item-title>
                  <v-list-item-subtitle>{{
                    author.department
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-chevron-triple-up</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Position</v-list-item-title>
                  <v-list-item-subtitle>{{
                    author.position
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>

    <div class="text-center">
      <v-btn block color="secondary" dark style="margin-top:30px"
        >파일 업로드</v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      author: {
        id: 'my-id',
        name: 'My Name',
        department: 'Develop',
        position: 'Slave'
      },
      first: ''
    }
  }
}
</script>

<style>
.btn_export {
  margin: 30px;
}
</style>
