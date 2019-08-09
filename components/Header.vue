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

    <v-btn icon to="/account" nuxt>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import WatchdocsLogo from '@/components/Logo.vue'

export default {
  name: 'Header',
  components: {
    WatchdocsLogo
  }
}
</script>
