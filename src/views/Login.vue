<template>
  <div class="login-page">
    <div class="row">
      <div class="login-title">
        <h1>Sytatyr Expenses Tracker</h1>
      </div>

      <blockquote class="text-center">
        <h2 class="login-subtitle">Don't forget it</h2>
      </blockquote>
      <h3 class="login-subtitle2">$</h3>

      <form class="form-group">
        <div class="mx-auto">
          <v-icon x-large class="user-icon">{{ icons.mdiAccount }}</v-icon>
          <input
            v-model="username"
            type="user"
            class="email-input"
            placeholder="Username"
            required
          />
        </div>
        <div class="mx-auto">
          <v-icon large class="lock-icon">{{ icons.mdiLock }}</v-icon>
          <input
            v-model="password"
            :type="type"
            class="password-input"
            placeholder="Password"
            required
          />
           <v-btn icon @click="showPassword()"><v-icon>{{ btnText }}</v-icon></v-btn>
        </div>

        <div class="mx-auto">
          <v-btn class="login-button" @click="goToHome()">Login</v-btn>
        </div>

        <notificationGroup group="bottom" position="bottom">
          <div>
            <div>
              <notification v-slot="{ notifications }">
                <div
                  v-for="notification in notifications"
                  :key="notification.id"
                >
                  <div class="notification-middle">
                    <svg
                      viewBox="0 0 100 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                      ></path>
                    </svg>
                  </div>

                  <div class="-mx-3 py-2 px-4">
                    <div class="mx-3">
                      <span class="text-red-500 font-semibold">{{
                        notification.title
                      }}</span>
                      <p class="text-gray-600 text-sm">
                        {{ notification.text }}
                      </p>
                    </div>
                  </div>
                </div>
              </notification>
            </div>
          </div>
        </notificationGroup>

        <div class="login-subtitle3">
          <p>
            Don't have an account yet?
            <a
              href="#"
              @click="
                (registerActive = !registerActive),
                  (emptyFields = false),
                  (showModal = true)
              "
              id="show-modal"
              >Sign up here</a
            >
          </p>
        </div>
      </form>
    </div>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <!-- Modal's Header -->
        <template #header> </template>

        <!-- Modal's Body -->
        <template #body>
          <div class="row">
            <div class="login-title">
              <h1>Sytatyr Expenses Tracker</h1>
            </div>

            <blockquote class="text-center">
              <h2 class="login-subtitle">WELCOME 😊</h2>
            </blockquote>
            <h3 class="login-subtitle2">$</h3>

            <notificationGroup group="top" position="top">
              <div>
                <div>
                  <notification v-slot="{ notifications }">
                    <div
                      v-for="notification in notifications"
                      :key="notification.id"
                    >
                      <div class="notification-middle">
                        <svg
                          viewBox="0 0 100 40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                          ></path>
                        </svg>
                      </div>

                      <div class="-mx-3 py-2 px-4">
                        <div class="mx-3">
                          <span class="text-red-500 font-semibold">{{
                            notification.title
                          }}</span>
                          <p class="text-gray-600 text-sm">
                            {{ notification.text }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </notification>
                </div>
              </div>
            </notificationGroup>

            <form class="form-group">
              <div class="mx-auto">
                <v-icon x-large class="user-icon">{{ icons.mdiEmail }}</v-icon>
                <input
                  v-model="email"
                  type="email"
                  class="email-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="mx-auto">
                <v-icon large class="lock-icon">{{ icons.mdiLock }}</v-icon>
                <input
                  v-model="password2"
                  :type="type"
                  class="password-input"
                  placeholder="Password"
                  required
                />
                 <v-btn icon @click="showPassword()"><v-icon>{{ btnText }}</v-icon></v-btn>
              </div>

              <div class="mx-auto">
                <v-icon large class="lock-icon">{{ icons.mdiAccount }}</v-icon>
                <input
                  v-model="username2"
                  type="username"
                  class="password-input"
                  placeholder="Username"
                  required
                />
              </div>
              <div class="mx-auto">
                <v-icon large class="lock-icon">{{ icons.mdiAccount }}</v-icon>
                <input
                  v-model="name"
                  type="Name"
                  class="password-input"
                  placeholder="Name"
                  required
                />
              </div>
            </form>
          </div>
        </template>
        <template #footer>
          <v-btn class="login-button" @click="signUp()">Signup</v-btn>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import { mdiAccount, mdiLock, mdiEmail } from "@mdi/js";
import Modal from "@/components/Modal.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Modal,
  },

  methods: {
    showPassword() {
       if(this.type === 'password') {
          this.type = 'text'
           this.btnText = 'mdi-cancel'
       } else {
          this.type = 'password'
          this.btnText = 'mdi-eye'
       }
     },
    async goToHome() {
      if (this.username == "" || this.password == "") {
        this.emptyNotificationmain();
      } else {
        this.success = false;
        this.error = null;
        try {
          await this.$store.dispatch("signIn", {
            username: this.username,
            password: this.password,
          });
          this.success = true;
          this.$router.push("/expenses");
        } catch (err) {
           this.invalidNotification();
          console.log(err.message);
        }
      }
    },
    async signUp() {
      if (this.email == null || this.username2 == null || this.password2 == null || this.name == null) {
        this.emptyNotification();
      } else {
          const url ="https://sytatyr-expense-tracker-be.herokuapp.com/user/add";
         var res = await axios.post(url, {username: this.username2, password: this.password2, email : this.email, name: this.name
        }).then((res) => res.data);
        console.log(res);
        location.reload();
      }
    },
    emptyNotification() {
      this.$notify(
        {
          group: "top",
          title: "Error!!!",
          text: "No empty fields!!!",
        },
        4000
      );
    },
    emptyNotificationmain() {
      this.$notify(
        {
          group: "bottom",
          title: "Error!!!",
          text: "No empty fields!!!",
        },
        4000
      );
    },
    invalidNotification() {
      this.$notify(
        {
          group: "bottom",
          title: "Error!!!",
          text: "Invalid Credentials",
        },
        4000
      );
    },
  },

  data: () => ({
     type: 'password',
     btnText: 'mdi-eye',
    showModal: false,
    icons: {
      mdiAccount,
      mdiLock,
      mdiEmail,
    },
    username: "",
    password: "",
    email:"",
  }),
};
</script>

<style>
.login-page {
  margin-left: 33%;
  margin-right: 30%;
  margin-top: 8rem;
  display: flex;
  height: 50vh;
}
.login-title {
  font-size: 150%;
}
.login-subtitle {
  margin-left: 10%;
  margin-top: 1rem;
  font-size: 180%;
  font-style: italic;
}

.login-subtitle2 {
  margin-left: 50%;
  margin-top: 1rem;
  font-size: 500%;
}

.email-input {
  margin-top: 1rem;
  border: solid;
  border-color: #75b79e;
}

.password-input {
  margin-top: 1rem;
  border: solid;
  border-color: #75b79e;
}

.login-button {
  margin-top: 2rem;
  margin-left: 45%;
  font-style: italic;
}
.login-subtitle3 {
  margin-left: 30%;
  margin-top: 1rem;
}
.user-icon {
  margin-left: 30%;
}

.lock-icon {
  margin-left: 30.5%;
}

.notification-middle {
  margin-left: 40%;
}
</style>