<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <FirstLook logo_sign="link" focus_sign="on" tone="Create an account" />
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="handleRegister">
        <div>
          <label for="email" class="label">Email address</label>
          <div class="mt-2">
            <input
              id="email"
              class="user_input"
              name="email"
              type="text"
              v-model="email"
              required
            />
          </div>
        </div>

        <div>
          <label for="password" class="label">Password</label>
          <div class="mt-2">
            <input
              id="password"
              class="user_input"
              name="password"
              type="password"
              v-model="password"
              required
            />
          </div>
        </div>
        <div>
          <label for="repeated_password" class="label"
            >Repeat the password</label
          >
          <div class="mt-2">
            <input
              id="repeated_password"
              class="user_input"
              name="repeated_password"
              type="repeated_password"
              v-model="repeated_password"
              required
            />
          </div>
        </div>

        <Btn text="Create an account" />
      </form>
    </div>
  </div>
</template>

<script>
import FirstLook from "@/components/FirstLookComponent.vue";
import Btn from "@/components/BtnComponent.vue";

export default {
  name: "register",
  components: { FirstLook, Btn },
  data() {
    return {
      email: "",
      password: "",
      repeated_password: "",
    };
  },
  methods: {
    async handleRegister(event) {
      event.preventDefault();

      fetch(`${process.env.VUE_APP_BACKEND_HOST}signup`, {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          repeated_password: this.repeated_password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else
            alert(
              "The email is not correct, is repeated or the password doesn't match."
            );
        })
        .then((data) => {
          this.$router.push("/short");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style>
.user_input {
  @apply block w-full rounded-md border-0 py-1.5 ps-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
}
.label {
  @apply block text-sm font-medium leading-6 text-gray-900;
}
</style>