<script setup lang="ts">
const skills = ref<string[]>([
  'HTML', 'CSS', 'SCSS', 'Tailwindcss',
  'Javascript', 'Typescript', 
  'Vue', 'Nuxt', 'Express.js',
  'PHP', 'Wordpress', 'Redis', 'PostgreSQL',
  'OpenAI/GeminiAI', 'Figma'
])
</script>

<template>
  <div class="snap-start pb-12 snap-always slide-sec pr-5 xl:pr-[61px]">
    <div class="grid lg:grid-cols-3 gap-5 xl:gap-10 items-center py-8 lg:py-12">
      <div class="pb-4">
        <div class="flex flex-col gap-y-5 md:flex-row justify-between pb-5 border-b border-[#494C5F]">
          <div>
            <h3 class="text-2xl text-white font-semibold mb-2">
              Marcin Buglewicz
            </h3>
            <span class="text-white text-lg">Web developer</span>
          </div>
          <div class="flex space-x-2 items-center">
            <h3 class="text-7xl leading-none text-green-400 font-bold">
              8
            </h3>
            <p class="text-lg text-white font-medium">
              Years <br>
              Experience
            </p>
          </div>
        </div>
        <p class="text-white text-lg mt-5 leading-normal">
          My name is Marcin Buglewicz, and I'm a web
          developer based in Poland.
        </p>
        <p class="text-white text-lg leading-normal">
          I've been working in the web development field for 8
          years.
        </p>
      </div>
      <div  class="mx-auto relative hidden lg:block">
        <img src="/images/result.png" class="w-full relative z-20 -top-8 rounded-full -scale-x-100" alt="">
      </div>
      <div>
        <ul class="divide-y divide-[#494C5F]">
          <li class="flex justify-between items-center pl-4 py-5">
            <div>
              <h4 class="text-xl font-semibold text-white mb-4">
                IT Technician
              </h4>
              <span class="text-sm">Karcpackie Centrum Obsługi Inwestycji</span>
            </div>
            <div class="shrink-0">
              <span class="border border-seagreen-500 text-green-400 px-3 py-2 rounded-md">
                2018-2024</span>
            </div>
          </li>
          <li class="flex justify-between items-center pl-4 py-5">
            <div>
              <h4 class="text-xl font-semibold text-white mb-4">
                IT Technician
              </h4>
              <span class="text-sm">NT Solutions Sp. z o.o.</span>
            </div>
            <div class="shrink-0">
              <span class="border border-seagreen-500 text-green-400 px-3 py-2 rounded-md">
                2015-2018</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="border-b border-[#494C5F] pb-3">
        <h3 class="text-borderl-500 text-2xl">I have experience working with</h3>
      </div>
      <ul class="mt-7 flex flex-wrap gap-3 gap-y-6">
        <li v-for="(s, index) in skills" :key="index">
          <span class="bg-slate-800 block px-4 py-3 hover:bg-green-400 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">{{ s }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>