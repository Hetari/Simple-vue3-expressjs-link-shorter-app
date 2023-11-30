<template>
  <div>
    <button
      type="submit"
      class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#322cac] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Btn",
  props: ["text"],
};
</script>

<style>
</style>