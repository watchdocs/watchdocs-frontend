<template>
  <v-app-bar app clipped-left>
    <watchdocs-logo size="24px" color="black" />
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

    <v-btn icon v-if="login" to="/upload" nuxt>
      <v-icon>mdi-upload</v-icon>
    </v-btn>
    <div v-else></div>

    <v-btn v-if="login" icon to="/account" nuxt>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
    <v-btn v-else style="margin-right:40px;" to="/login" nuxt>Login</v-btn>
  </v-app-bar>
</template>

<script>
import WatchdocsLogo from '@/components/Logo.vue'

export default {
  name: 'Header',
  components: {
    WatchdocsLogo
  },
  computed: {
    login: window.document && window.document.cookie.includes("token")
  }
}
</script>
