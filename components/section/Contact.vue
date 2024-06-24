<template>
  <div class="flex flex-col snap-start snap-always py-8">
    <h2 class="text-white font-bold text-4xl leading-normal xl:text-5xl xl:leading-snug text-center text-balance">
      Write me something cool, or let’s get some coffee
    </h2>
    <div class="flex w-full">
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
        <a href="mailto:marcinbuglewicz@gmail.com" target="_blank" class="btn">
          <Icon name="skill-icons:gmail-light" size="28" class="flex-shrink-0"/>
          marcinbuglewicz@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/marcin-buglewicz-0727052b9/" target="_blank" class="btn">
          <Icon name="skill-icons:linkedin" size="28" class="flex-shrink-0"/>
          LinkedIn
        </a>
        <a href="https://github.com/Muphet" target="_blank" class="btn">
          <Icon name="skill-icons:github-light" size="28" class="flex-shrink-0"/>
          Github
        </a>
        <a href="/Marcin-Buglewicz-CV.pdf" target="_blank" class="btn">
          <Icon name="academicons:cv-square" size="28" class="flex-shrink-0"/>
          My CV
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply flex justify-center px-2 py-1 bg-slate-700 rounded-lg ring-1 ring-slate-500 ring-offset-0 items-center text-xs lg:text-lg hover:bg-slate-600 gap-2;
}
</style>