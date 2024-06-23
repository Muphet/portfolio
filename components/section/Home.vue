<template>
  <div 
    class="snap-start snap-always slide-sec mx-auto lg:max-w-7xl pt-8 lg:pt-14 pr-5 xl:pr-[61px] overflow-hidden animate"
    >
    <div class="flex flex-col gap-10 lg:flex-row lg:items-center pb-20">
      <div class="lg:w-1/2">
        <h1 class="text-5xl xl:text-7xl mb-8 font-semibold text-white">
          <div class="flex items-center gap-2">
            <Icon name="mdi:hand-wave" size="52" />
            Hey, I am
          </div>
          <span class="text-5xl sm:text-[68px]">Marcin Buglewicz</span>
          <br>
          <span class="inline-block text-5xl sm:text-[60px] font-bold rounded"
            style="background: url('/images/bottom-line.png') no-repeat bottom;">
            Web Developer</span>
        </h1>
        <p class="text-2xl text-borderl-500 mb-4">
          Frontend developer specialized in Vue.js
        </p>
        <div class="flex flex-col sm:flex-row sm:items-center gap-8 mt-10">
          <a href="#"
            class="hidden bg-green-400 text-interface-100 px-6 py-4 rounded-lg lg:inline-flex justify-center items-center hover:bg-seagreen-600 font-medium transition-all">
            <span>Hire Me</span>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="#04091E" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>

        </div>
        <div class="pt-14">
          <p class="text-base text-interface-200 flex items-center flex-wrap gap-1">
            I am currently
            <span class="text-green-400 font-semibold text-xl flex items-center">looking for a job</span>
            .
          </p>
        </div>
      </div>
      <div class="lg:w-1/2 w-full">
        <div class="relative flex justify-center items-center">

          <div class="absolute w-[75vw] h-[75vw] lg:w-[32vw] lg:h-[32vw] xxl:-right-8">
            <div class="mx-0 my-auto w-full h-full relative">
              <div class="fm-big-circle h-full w-full relative rounded-t-full flex items-center justify-center max-h-[489px] max-w-[489px]">
                <img src="/images/oval2.png" alt="web design icon" class="max-h-[489px] max-w-[489px]">
                <div class="fm-icon-block size-11 absolute rounded-full flex items-center justify-center">
                  <Icon name="logos:nuxt-icon" size="48" />
                </div>
                <div class="fm-icon-block size-24 absolute rounded-full flex items-center justify-center">
                  <Icon name="logos:react" size="48" />
                </div>
                <div class="fm-icon-block size-36 absolute rounded-full flex items-center justify-center">
                  <Icon name="logos:openai-icon" size="48" />
                </div>
              </div>
              <div class="fm-circle absolute top-1/2 left-1/2  rounded-full">
                <img src="/images/oval1.png" alt="web design icon" class="max-h-[349px] max-w-[349px]">
                <div class="fm-icon-block w-11 h-11 absolute rounded-full flex items-center justify-center">
                  <Icon name="logos:docker-icon" size="48" />
                </div>
                <div class="fm-icon-block w-11 h-11 absolute rounded-full flex items-center justify-center">
                  <Icon name="logos:figma" size="48" />
                </div>
              </div>
              <div class="fm-center-logo absolute top-1/2 left-1/2">
                <img src="/images/result_bg.png" class="rounded-full max-w-[185px] max-h-[185px]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>