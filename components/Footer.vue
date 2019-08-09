<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="primary">
        <v-layout justify-space-between>
          <strong>File Share Service</strong>
          <a class="view-on-github" href="https://github.com/watchdocs">
            View on
            <span class="github">GitHub</span>
          </a>
        </v-layout>
      </v-card-text>
      <v-card-text class="grey darken-3 text-center pa-2"
        >&copy; 2019 Team GAZUA. All rights reserved.</v-card-text
      >
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.view-on-github {
  color: white;
  text-decoration: none;
}
.github {
  font-weight: 700;
}
</style>
