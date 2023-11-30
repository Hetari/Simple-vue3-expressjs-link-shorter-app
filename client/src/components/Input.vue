<template>
  <div>
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
      >{{
        this.name.charAt(0).toUpperCase() + this.name.slice(1)
      }}
      address</label
    >
    <div class="mt-2">
      <input
        :id="name"
        :name="name"
        :type="type"
        :required="required"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["name", "type", "required"],
};
</script>

<style>
</style>