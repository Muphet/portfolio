<template>
  <div class="flex flex-col space-y-4 w-full">
    <div class="pill">
      <slot name="header"></slot>
    </div>
    <article>

      <slot />
    </article>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.pill {
  @apply items-center ring-1 ring-secondary text-slate-100;
}
</style>