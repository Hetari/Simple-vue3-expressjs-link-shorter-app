<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h1
      class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 uppercase"
    >
      {{ logo_sign }}
      <a class="text-indigo-600" href="">
        {{ focus_sign }}
        <svg viewBox="0 2 70 36">
          <path
            d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527"
          />
        </svg>
      </a>
    </h1>

    <h2
      class="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900"
    >
      {{ tone }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "FirstLook",
  components: {},
  props: ["logo_sign", "focus_sign", "tone"],
  data() {
    return {};
  },
};
</script>

<style>
</style>