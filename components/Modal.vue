<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
  defineProps({
    show: Boolean
  })
  const emit = defineEmits(['close'])
  const closeModal = () => emit('close');
  const modalRef = ref(null)

  onClickOutside(
    modalRef,
    () => closeModal()
  )
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container" ref="modalRef">
        <div class="modal-header">
          <div><slot name="header"></slot></div>
          <button @click="closeModal" class="hover:bg-slate-700 rounded-lg grid items-center">
            <Icon name="mdi:close" size="32"/>
          </button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>


<style>
.modal-mask {
  @apply fixed z-20 inset-0 w-full h-full bg-black/35 flex transition-opacity overflow-y-scroll p-4;
}
.modal-header {
  @apply flex w-full items-center justify-between p-2;
}
.modal-container {
  @apply max-w-screen-md m-auto bg-slate-800 rounded-lg shadow-lg transition-all relative;
}
.modal-body {
  @apply m-2 flex flex-col;
}

.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>