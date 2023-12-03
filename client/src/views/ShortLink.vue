<template>
  <div class="h-[60vh] short-bg">
    <form
      @submit.prevent="handleSubmit"
      novalidate
      class="h-full items-center justify-center flex flex-col max-w-md mx-auto"
    >
      <div class="relative z-0 w-full mb-5 group">
        <input
          :class="{ 'border-red-500': isValidUrl }"
          v-model="url"
          type="text"
          name="url"
          id="url"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
          placeholder=""
          required
        />
        <label
          for="url"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Url address, please enter valid url with http, https, or www</label
        >
      </div>

      <Btn class="w-full" text="Make it shorter" />
    </form>

    <div
      @click="copyText"
      class="h-10 items-start justify-start flex max-w-md mx-auto bg-slate-200 rounded-sm p-2 text-center text-sm"
    >
      <a href="">
        {{ link }}
      </a>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/BtnComponent.vue";
export default {
  components: { Btn },
  data() {
    return {
      url: "",
      link: "",
    };
  },
  computed: {
    isValidUrl() {
      const pattern = /^(http[s]?:\/\/|www\.)\S+$/;

      return !pattern.test(this.url);
    },
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      // Make the HTTP request using fetch
      fetch(`http://localhost:3000/short`, {
        method: "POST",
        body: JSON.stringify({ url: this.url }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.link = data.short_url;
        })
        .catch((error) => {
          alert(error);
        });
      // this.url = "";
    },
  },
  copyText() {
    const textToCopy = "the link goes here";

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard:", textToCopy);
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  },
};
</script>

<style>
</style>