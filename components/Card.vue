<script lang="ts" setup>
import type { Project } from '~/types/project';
const router = useRouter();
defineProps<{
  project: Project
}>()

const open = ref<boolean>(false)

const closeModal = () => {
  open.value = false
  router.replace('/')
}
</script>

<template>
  <div class="w-full h-fit relative group">
    <div
      class="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-interface-100 bg-opacity-80">
      <h2 class="text-white text-center text-[28px] font-semibold px-10">
        {{ project.title }}
      </h2>
      <nuxt-link :to="`/projects/${project.id}`" @click="open = true"
        class="mt-8 border border-seagreen-500 rounded-md px-8 py-2 text-sm text-green-400 gallery">
        View Project
      </nuxt-link>
    </div>
    <Nuxt-img class="w-full" :src="project.image" alt="" />
  </div>
  <Teleport to="body">
    <Modal :show="open" @close="closeModal">
      <template #header v-if="project.source">
        <a :href="project.source"
        class="bg-slate-700 px-2 py-1 rounded flex items-center space-x-1">
          <Icon name="ri:github-fill" />
          <span>Source code</span>
        </a>
      </template>
      <ContentDoc unwrap="p"/>
    </Modal>
  </Teleport>
</template>

<style scoped>
.modal {
  @apply fixed z-40 inset-0 w-full h-full bg-black/25 grid items-center justify-center p-12 overflow-y-scroll;
}

.modal-inner {
  @apply flex max-w-screen-lg bg-slate-900 text-neutral-100 rounded-lg z-50 h-auto p-12 flex-col;
}
</style>