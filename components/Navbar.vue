<template>
  <div class="pt-6 absolute w-full top-0 justify-between box-border hidden sm:flex px-28">
    <div class="flex gap-[42px] justify-start items-center">
      <div class="flex gap-[6px] text-lg font-medium font-work text-[#747681] group">
        <Icon name="mingcute:mail-send-line" size="28" class="text-green-400" />
        <a href="mailto:marcinbuglewicz@gmail.com" class="group-hover:text-green-400 transition cursor-pointer">marcinbuglewicz@gmail.com</a>
      </div>
    </div>
    <div class="flex gap-10">
      <div class="md:flex gap-[10px] hidden">
        <a href="https://www.linkedin.com/in/marcin-buglewicz-0727052b9/" target="_blank" aria-label="linkedin"
          class="w-10 h-10 flex justify-center items-center rounded-lg bg-slate-800 group transition-all hover:bg-green-400">
          <Icon name="ri:linkedin-box-fill" />
        </a>
        <a href="https://github.com/Muphet" target="_blank" aria-label="github"
          class="w-10 h-10 flex justify-center items-center rounded-lg bg-slate-800 group transition-all hover:bg-green-400">
          <Icon name="ri:github-fill" />
        </a>
      </div>
    </div>
  </div>
  <div class="flex sm:hidden bg-red absolute top-0 h-10 w-full">
    <div class="relative top-0 w-full px-5 lg:px-12 2xl:px-0 pt-6 justify-center box-border flex items-center">
      <div class="gap-[42px] justify-start items-center">
        <div class="flex gap-[6px] text-lg font-medium font-work text-[#747681] group">
          <Icon name="mingcute:mail-send-line" size="28" class="text-green-400" />
          <span class="group-hover:text-green-400 transition cursor-pointer">marcinbuglewicz@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>