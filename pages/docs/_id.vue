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
