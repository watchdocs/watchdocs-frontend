<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <div id="title">
          <strong> <v-icon id="icon_account">mdi-account</v-icon>Admin </strong>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Add</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-text-field
                        v-model="userId"
                        label="ID"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="userName"
                        label="Name"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="userEmail"
                        label="Email"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="userDepartment"
                        label="Department"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="userPosition"
                        label="Position"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="userPassword"
                        label="Password"
                        type="password"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-switch
                        v-model="userAdmin"
                        color="primary"
                        label="Admin"
                      />
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false"
                  >Close</v-btn
                >
                <v-btn color="blue darken-1" text @click="createUser"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <v-data-table v-if="users" :headers="headers" :items="users">
          <!-- <template v-slot:item.name="props">
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
          </template> -->
          <template v-slot:item.password="props">
            <v-btn depressed @click="resetPassword">Reset</v-btn>
          </template>
          <template v-slot:item.admin="props">
            <v-switch v-model="props.item.admin" color="primary" readonly />
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
      dialog: false,
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
      userId: '',
      userName: '',
      userEmail: '',
      userDepartment: '',
      userPosition: '',
      userPassword: '',
      userAdmin: false,
      users: []
    }
  },
  async created() {
    const { data } = await this.$axios.$get('/users', {
      headers: {
        'x-access-token': document.cookie.split(';')[0].split('=')[1]
      }
    })
    if (data) {
      this.users = data.map((user) => {
        return {
          ...user,
          id: user.userID,
          name: user.username
        }
      })
    }
  },
  methods: {
    save() {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
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
    async createUser() {
      await this.$axios.$post('/users', {
        userID: this.userId,
        username: this.userName,
        email: this.userEmail,
        department: this.userDepartment,
        position: this.userPosition,
        password: this.userPassword,
        admin: this.userAdmin
      })
      this.dialog = false
    },
    resetPassword() {
      this.$axios.$put(
        `/users/${document.cookie.split(';')[1].split('=')[1]}`,
        { newPassword: 1234 }
      )
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
