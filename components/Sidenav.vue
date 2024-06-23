<template>
  <div
    :class="horizontal
      ? 'sm:hidden w-full grid grid-cols-4 grid-rows-1 text-slate-600 items-center bg-slate-800'
      :'nav-bar nav-bar w-[60px] xl:w-[92px] -left-[30px] xl:-left-[46px] border-2 rounded-2xl overflow-hidden border-slate-700 absolute bg-slate-800 hidden sm:block divide-y-2 divide-slate-700'"
  >
    <button @click="scrollToView('home')"
      class="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-green-400"
      :class="{ 'bg-green-400': currentView === 'home' }">
      <Icon name="solar:home-bold" size="48" />
    </button>
    <button @click="scrollToView('about')"
      class="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-green-400"
      :class="{ 'bg-green-400': currentView === 'about' }">
      <Icon name="ion:university" size="48" />
    </button>
    <button @click="scrollToView('projects')"
      class="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-green-400"
      :class="{ 'bg-green-400': currentView === 'projects' }">
      <Icon name="material-symbols:code-blocks" size="48" />
    </button>
    <button @click="scrollToView('contact')"
      class="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-green-400"
      :class="{ 'bg-green-400': currentView === 'contact' }">
      <Icon name="ph:address-book-fill" size="48" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (event: 'scroll', refName: string): void
}>();
withDefaults(defineProps<{
  currentView: string
  horizontal?: boolean
}>(), {
  horizontal: false
});

const scrollToView = (refName: string) => {
  emit('scroll', refName)
}
</script>