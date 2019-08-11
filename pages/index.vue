<template>
  <v-container>
    <h1 class="display-1">Documents</h1>
    <h4 class="subtitle-1">Your Files</h4>
    <br />
    <v-layout v-if="login">
      <v-flex xs12 md8>
        <v-data-table
          class="files"
          :headers="headers"
          :items="currentDirectory"
          @click:row="move"
        >
          <template v-slot:item.author="{ item }">
            <span class="user" @mouseover="updateAuthor(item)"
              >[{{ item.author }}]</span
            >
          </template>
        </v-data-table>
      </v-flex>
      <v-flex xs12 md4 mx-2>
        <v-card v-if="currentAuthor" flat>
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                currentAuthor.name
              }}</v-list-item-title>
              <v-list-item-subtitle
                >@{{ currentAuthor.id }}</v-list-item-subtitle
              >
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
                    currentAuthor.department
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
                    currentAuthor.position
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <h1 v-else>Login First!</h1>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'File Name', value: 'name' },
        { text: 'Modified Date', value: 'updated_at' },
        { text: 'Author', value: 'author' }
      ],
      currentAuthor: null,
      currentDirectory: [],
      login: false
    }
  },
  async mounted() {
    const data = await this.$axios.$get(`/documents/`)
    this.currentDirectory = data
  },
  created() {
    this.login = document.cookie.includes('token')
  },
  methods: {
    async move(row) {
      // window.location.href = '/docs/' + row._id
    },
    async updateAuthor(row) {
      const data = await this.$axios.$get(`/users/${row.author}`)
      this.currentAuthor = {
        ...data,
        id: data.userID,
        name: data.username
      }
    }
  }
}
</script>

<style>
.user {
  color: #632a7e;
}
</style>
