<template>
  <header class="flex items-center h-[85vh]">
    <div class="smoothie ps-10 pe-20">
      <img src="/smoothie.png" alt="smoothie" class="object-cover" />
    </div>
    <div class="headings">
      <h2>Short some links with Linkon</h2>
      <h3>By Brhoom</h3>
      <a
        href="/short"
        class="mt-5 py-3 px-4 text-uppercase font-bold inline-block text-sm bg-[#4f46e5] text-white rounded-full hover:bg-[#322cac] transition duration-300"
        >View Recipes</a
      >
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
}
header img {
  width: 300px;
}

header h2 {
  font-size: 3em;
}
header h3 {
  font-size: 1.6em;
  margin-bottom: 10px;
  margin-left: 2px;
  color: #999;
}
</style>