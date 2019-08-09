<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>WatchDocs</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      //this.$vuetify.theme.dark = true
    },
  }
</script>