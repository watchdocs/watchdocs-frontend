<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left>
      <logo size="24px" color="black"></logo>
      <v-toolbar-title style="width: 180px" class="ml-0 pl-4">
        <nuxt-link to="/" style="text-decoration:none; color:black"
          >WatchDocs</nuxt-link
        >
      </v-toolbar-title>

      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
        style="width: 500px"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn icon to="/account" nuxt>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer app>
      <span>&copy; 2019 Team_Gazua Republic of Korea</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    // this.$vuetify.theme.dark = true
  }
}
</script>
