<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'
const currentView = ref<string>("home");
const home = ref<HTMLElement | null>(null)
const about = ref<HTMLElement | null>(null)
const projects = ref<HTMLElement | null>(null)
const contact = ref<HTMLElement | null>(null)
const refs: Record<string, Ref<HTMLElement | null>> = {home, about, projects, contact};

const scrollTo = (refName: string) => {
  if(!refName) return;
  
  if (refName in refs) {
    const {$el} = refs[refName as keyof typeof refs].value;
    if ($el) {
      $el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

function onIntersectionObserver([{ isIntersecting, target }]: IntersectionObserverEntry[]) {
  if (isIntersecting) currentView.value = target.id
}
</script>

<template>
  <div class="max-h-screen h-screen">
    <div style="background: url('/images/bg.png')"
      class="flex justify-center items-center bg-no-repeat box-border bg-cover h-full relative pb-[68px]">
      <div class="container h-full w-full box-border relative pt-[72px] pb-6 sm:pt-[105px] sm:pb-[37px]">
        <Navbar/>
        
        <div class="w-full relative flex justify-center items-center top-8 xl:top-24 h-[50vh] min-h-[640px] flex-shrink-0 px-3 sm:px-8 lg:px-12 2xl:px-0">
          <div class="w-full max-w-[1320px] relative rounded-xl lg:rounded-3xl bg-[#121B30] flex items-center h-full">
            <Sidenav @scroll="scrollTo" :currentView="currentView"/>
            <div class="h-full w-full rounded-xl lg:rounded-3xl overflow-hidden">
              <section
                class="sm:snap-mandatory sm:snap-y pl-5 sm:pl-12 xl:pl-[90px] pb-[78px] h-full overflow-x-hidden overflow-y-scroll scroll-smooth"
                id="main" ref="scroll">
                <SectionHome ref="home" id="home" v-intersection-observer="[onIntersectionObserver, { threshold: 0.5 }]" @scroll="scrollTo"/>
                <SectionAbout ref="about" id="about" v-intersection-observer="[onIntersectionObserver, { threshold: 0.5 }]"/>
                <SectionProjects ref="projects" id="projects" v-intersection-observer="[onIntersectionObserver, { threshold: 0.35 }]"/>
                <SectionContact ref="contact" id="contact" v-intersection-observer="[onIntersectionObserver, { threshold: 0.5 }]"/>
                <Footer class="sm:hidden" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="w-full absolute bottom-0 flex justify-center items-center bg-[#050F25] border-t border-[#121B30]">
      <Footer class="hidden sm:flex" />
      <Sidenav horizontal @scroll="scrollTo" :currentView="currentView"/>
    </footer>
  </div>
</template>