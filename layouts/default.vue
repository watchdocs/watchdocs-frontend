<template>
  <v-app>
    <watchdocs-header />
    <v-content>
      <nuxt />
    </v-content>
    <watchdocs-footer />
  </v-app>
</template>

<script>
import WatchdocsFooter from '@/components/Footer.vue'
import WatchdocsHeader from '@/components/Header.vue'

export default {
  components: {
    WatchdocsFooter,
    WatchdocsHeader
  },
  data: () => ({
    drawer: null
  }),
  created() {
    // this.$vuetify.theme.dark = true
  }
}
</script>
