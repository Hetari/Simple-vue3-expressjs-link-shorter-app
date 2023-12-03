<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <FirstLook
      logo_sign="link"
      focus_sign="on"
      tone="Sign in to your account"
    />
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="handleLogin">
        <div>
          <label for="email" class="label">Email</label>
          <div class="mt-2">
            <input
              id="email"
              class="user_input"
              name="email"
              type="email"
              v-model="email"
              :required="true"
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
              :required="true"
            />
          </div>
        </div>

        <div class="text-sm text-center">
          <a
            href="#"
            class="font-semibold text-indigo-600 hover:text-[#322cac] transition duration-300"
            >Forgot password?</a
          >
        </div>
        <Btn text="Sign in" />
      </form>
    </div>
  </div>
</template>

<script>
import FirstLook from "@/components/FirstLookComponent.vue";
import Btn from "@/components/BtnComponent.vue";

export default {
  name: "login",
  components: { FirstLook, Btn },
  data() {
    return {
      email: "",
      password: "",
      repeated_password: "",
    };
  },
  methods: {
    async handleLogin(event) {
      event.preventDefault();

      fetch(`${process.env.VUE_APP_BACKEND_HOST}signin`, {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "The email is not correct, is repeated or the password doesn't match."
            );
            this.$router.push("/signin");
          }
        })
        .then((data) => {
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style >
:root {
  --text: #2b3044;
  --line: #bbc1e1;
  --line-active: #4f46e5;
}

h1 a {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  margin: 0 var(--spacing, 0px);
  transition: margin 0.25s;
}
svg {
  width: 70px;
  height: 45px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 7px) translateZ(0);
  fill: none;
  stroke: var(--stroke, var(--line));
  stroke-linecap: round;
  stroke-width: 2px;
  stroke-dasharray: var(--offset, 69px) 278px;
  stroke-dashoffset: 361px;
  transition: stroke 0.25s ease var(--stroke-delay, 0s), stroke-dasharray 0.35s;
}

svg:hover {
  --stroke: var(--line-active);
  --stroke-delay: 0.1s;
  --offset: 200px;
}
</style>