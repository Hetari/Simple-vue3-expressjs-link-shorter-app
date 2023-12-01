<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <FirstLook logo_sign="link" focus_sign="on" tone="Create an account" />

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <Input
          labelName="Email address"
          id="email"
          name="email"
          type="email"
          :required="true"
        />
        <Input
          labelName="Password"
          id="password"
          name="password"
          type="password"
          :required="true"
        />
        <Input
          labelName="Password Conform"
          id="conf_password"
          name="conform password"
          type="password"
          :required="true"
        />
        <Btn text="Create an account" />
      </form>
    </div>
  </div>
</template>

<script>
import FirstLook from "@/components/FirstLookComponent.vue";
import Input from "@/components/InputComponent.vue";
import Btn from "@/components/BtnComponent.vue";

export default {
  name: "register",
  components: { FirstLook, Input, Btn },
  data() {
    return {};
  },
};
</script>
