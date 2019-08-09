<template>
  <v-container>
    <h1 class="display-1">(문서제목)</h1>
    <br />
    <h4 class="subtitle-1">(문서버전)</h4>
    <h4 class="subtitle-1">(최근수정자),(최근수정시간)</h4>
    <br />
    <v-layout>
      
      <v-flex xs12 md8>
        <v-card>
        <v-card-text>
          <p class="text-sm-left">(문서 내용)Left align on small viewport sizesLeft align on small viewport sizesLeft align on small viewport sizesLeft align on small viewport sizes</p>
        </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md4 mx-2>
        <v-card flat>
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
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
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      파일 다운로드
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="true"
      color="success"
      @click="loader = 'loading2'"
    >
      QR 코드로 공유
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading4"
      :disabled="loading4"
      color="info"
      @click="loader = 'loading4'"
    >
      버전관리 기록확인
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </template>
    </v-btn>
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
      }
    }
  }
}
</script>

<style>
  .btn_export{
    margin: 30px;
  }
  .text-center{
    margin: 50px;
  }
</style>



