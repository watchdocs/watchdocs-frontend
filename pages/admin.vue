<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <div id="title">
          <strong> <v-icon id="icon_account">mdi-account</v-icon>Admin </strong>
        </div>

        <v-data-table :headers="headers" :items="users">
          <template v-slot:item.name="props">
            <v-edit-dialog
              :return-value.sync="props.item.name"
              @save="save"
              @cancel="cancel"
              @open="open"
              @close="close"
            >
              {{ props.item.name }}
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.name"
                  :rules="[max25chars]"
                  label="Edit"
                  single-line
                  counter
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
          <template v-slot:item.email="props">
            <v-edit-dialog
              :return-value.sync="props.item.email"
              @save="save"
              @cancel="cancel"
              @open="open"
              @close="close"
            >
              {{ props.item.email }}
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.email"
                  :rules="[max25chars]"
                  label="Edit"
                  single-line
                  counter
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
          <template v-slot:item.department="props">
            <v-edit-dialog
              :return-value.sync="props.item.department"
              @save="save"
              @cancel="cancel"
              @open="open"
              @close="close"
            >
              {{ props.item.department }}
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.department"
                  :rules="[max25chars]"
                  label="Edit"
                  single-line
                  counter
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
          <template v-slot:item.position="props">
            <v-edit-dialog
              :return-value.sync="props.item.position"
              @save="save"
              @cancel="cancel"
              @open="open"
              @close="close"
            >
              {{ props.item.position }}
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.position"
                  :rules="[max25chars]"
                  label="Edit"
                  single-line
                  counter
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
          <template v-slot:item.password="props">
            <v-btn depressed @click="resetPassword">Reset</v-btn>
          </template>
          <template v-slot:item.admin="props">
            <v-switch v-model="props.item.admin" color="primary" />
          </template>
        </v-data-table>

        <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
          {{ snackText }}
          <v-btn text @click="snack = false">Close</v-btn>
        </v-snackbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'E-mail', value: 'email' },
        { text: 'Department', value: 'department' },
        { text: 'Position', value: 'position' },
        { text: 'Password', value: 'password' },
        { text: 'Admin', value: 'admin' }
      ],
      users: [
        {
          id: 'my-id',
          name: 'My Name',
          email: 'email',
          department: 'Dept',
          position: 'Pos',
          password: 'PW',
          admin: true
        },
        {
          id: 'my-id',
          name: 'My Name',
          email: 'email',
          department: 'Dept',
          position: 'Pos',
          password: 'PW',
          admin: false
        }
      ]
    }
  },
  methods: {
    save() {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
      this.$axios.$post(`/users/${id}?data=${'content'}`)
    },
    cancel() {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    open() {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    close() {
      console.log('Dialog closed')
    },
    resetPassword() {
      this.$axios.$post(`/users/${id}?newPassword=1234`)
    }
  }
}
</script>

<style>
#title {
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 30px;
}
</style>
