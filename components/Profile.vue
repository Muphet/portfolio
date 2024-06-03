<template>
  <div class="profile">
    <span class="text-3xl">Marcin Buglewicz</span>
    <div class="w-64 h-48 bg-gradient-to-tr from-purple-700 to-green-500 via-blue-500 rounded-2xl mx-auto"/>    
    <span class="text-2xl">hello@muphet.com</span>
    <span class="text-2xl">Poland</span>
    <div class="flex mx-auto text-4xl">
      <a href="#">
        <Icon name="prime:twitter" />
      </a>
      <a href="#">
        <Icon name="prime:github" />
      </a>
      <a href="#">
        <Icon name="prime:linkedin" />
      </a>
    </div>
    <button class="block rounded-2xl text-black bg-green-400 py-3 uppercase">Hire me!</button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.profile {
  @apply ring-1 ring-slate-600 h-[600px] w-80 rounded-2xl p-4 space-y-8 flex flex-col;
}
.profile > span {
  @apply flex justify-center;
}
</style>