<template>
  <div class="h-[75vh] short-bg">
    <form
      novalidate
      method="POST"
      class="h-full items-center justify-center flex flex-col max-w-md mx-auto"
    >
      <div class="relative z-0 w-full mb-5 group">
        <input
          :class="{ 'border-red-500': isValidUrl }"
          v-model="floating_url"
          type="text"
          name="floating_url"
          id="floating_url"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=""
          required
        />
        <label
          for="floating_url"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Url address, please enter valid url with http, https, or www</label
        >
      </div>

      <Btn class="w-full" text="Make it shorter" />
    </form>
  </div>
</template>

<script>
import Btn from "@/components/BtnComponent.vue";
export default {
  components: { Btn },
  data() {
    return {
      floating_url: "",
    };
  },
  computed: {
    isValidUrl() {
      const pattern = /^(http[s]?:\/\/|www\.)\S+$/;

      return !pattern.test(this.floating_url);
    },
  },
  methods: {
    async handleSubmit(event) {
      //   event.preventDefault();
      //   // Make the HTTP request using fetch
      //   fetch("http://localhost:3000/short/url", {
      //     method: "POST",
      //     body: JSON.stringify({ floating_url: this.floating_url }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log(data);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      //   this.floating_url = "";
    },
  },
};
</script>

<style>
</style>