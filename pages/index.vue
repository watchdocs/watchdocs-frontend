<template>
  <v-container>
    <h1 class="display-1">Documents</h1>
    <h4 class="subtitle-1">Your Files</h4>
    <br />
    <v-layout>
      <v-flex xs12 md8>
        <v-data-table
          class="files"
          :headers="headers"
          :items="currentDirectory"
          @click:row="move"
        >
          <template v-slot:item.author="{ item }">
            <span @mouseover="updateAuthor(item)">{{ item.author }}</span>
          </template>
        </v-data-table>
      </v-flex>
      <v-flex xs12 md4 mx-2>
        <v-card v-if="currentAuthor" flat>
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ currentAuthor.name }}
              </v-list-item-title>
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
                  <v-list-item-subtitle>
                    {{ currentAuthor.department }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-chevron-triple-up</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Position</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ currentAuthor.position }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'File Name', value: 'name' },
        { text: 'Modified Date', value: 'modified' },
        { text: 'Author', value: 'author' }
      ],
      currentAuthor: null,
      currentDirectory: [
        {
          id: 1,
          name: 'Directory/',
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        },
        {
          id: 1,
          name: 'File',
          author: 'SJ Park',
          authorId: 1,
          modified: '1 min ago'
        }
      ]
    }
  },
  methods: {
    async move(row) {
      const files = await this.$axios.$get(`/dirs/${row.id}`)
      this.currentDirectory = files
    },
    async updateAuthor(row) {
      console.log(row)
      const author = await this.$axios.$get(
        `/user/${row.authorId}`
      )
      this.currentAuthor = author
    }
  }
}
</script>
