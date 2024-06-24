<script setup lang="ts">
import type { Project } from '~/types/project';
const projects = ref<Project[]>([
  {
    title: "Jobtrack-AI",
    id: "jobtrack",
    image: "/images/jobtrack.png",
    description: "Job tracking app that uses GeminiAI API for NLP. Built with Nuxt3 and deployed with NuxtHub.",
    source: "https://github.com/muphet/jobtrack-ai"
  },
  {
    title: "This portfolio",
    id: "portfolio",
    image: "/images/portfolio.png",
    source: "https://github.com/Muphet/portfolio",
    description: "Overengineered portfolio built with Nuxt3, Tailwindcss, TypeScript and Pinia."
  },
  {
    title: "Real estate agency Portal",
    id: "progress",
    image: "/images/progfront.png",
    preview: "https://progressnieruchomosci.pl",
    description: "Real estate listing website build with Nuxt2, Tailwindcss and Sass. Built as SSR MPA with REST. Later converted to Wordpress/PHP with Tailwindcss theme."
  },
  {
    title: "Real estate agency CMS",
    id: "cms",
    image: "/images/cms.png",
    description: "In-house tool made for real estate listing and media management. Built with Nuxt2, Vue.js, Tailwindcss, REST and Postgresql as SPA."
  },
  {
    title: "Echoes.gg",
    id: "echoes",
    image: "/images/echoes.png",
    description: "Fullstack social media platform built as mobile game tool featuring authentication with Express, real time graphql communication, complex max simulations, algolia search and more. Built primarily with Nuxt2, Vuex. Discontinued in 2020 after reaching 5000 MAU."
  }
])
</script>

<template>
  <div class="pt-9 lg:pt-14 snap-always snap-start slide-sec pb-10 pr-5 xl:pr-[61px]">
    <div class="flex flex-col sm:flex-row justify-between gap-4 items-center pb-10">
      <h1 class="sm:w-1/2 w-full text-white font-work font-bold text-3xl sm:text-[42px]">
        Let’s check <br/>
        my latest work
      </h1>
      <a href="https://github.com/Muphet"
        class="sm:px-8 px-3 py-3 border border-borderl-500 text-lg font-medium text-borderl-500 rounded-lg items-center">
        <Icon name="ri:github-fill" size="32" />
        <span>See&nbsp;more</span>
      </a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Card v-for="project in projects" :key="project.title" :project="project"/>
    </div>
  </div>
</template>