<template>
  <div class="wrapper">
    <div class="fixed-profile p-8">
      <Profile />
    </div>

    <div class="scrollable-content p-8">
      <article>
        <div class="bg-slate-700 text-white px-4 py-2 rounded-full inline-flex items-center">
          <Icon name="prime:home" size="24" />
          <span>Introduction</span>
        </div>
        <h2 class="text-7xl font-bold mb-4">Every great application begins with an even better story</h2>
        <p class="mb-6">Since beginning my journey as a frontend developer nearly 8 years ago, I've done work for real
          estete agency, designed and implemented both frontend and backend applications to ease our job. I'm quietly
          confident, naturally curious, and perpetually working on improving my programming skills.</p>
      </article>

      <article class="mt-8">
        <div class="bg-slate-700 text-white px-4 py-2 rounded-full inline-flex items-center">
          <Icon name="prime:home" size="24" />
          <span>Resume</span>
        </div>
        <h2 class="text-3xl font-bold mb-4">Education & Experience</h2>
        <div class="border-l-4 border-gray-700 pl-4">
          <div class="mb-4">
            <h3 class="text-xl font-semibold">IT Specialist, Fullstack</h3>
            <p class="text-gray-400">Karpackie Centrum Obsługi Inwestycji</p>
            <p class="text-gray-500">2018 - 2023</p>
          </div>
          <div class="mb-4">
            <h3 class="text-xl font-semibold">IT Specialist, Frontend</h3>
            <p class="text-gray-400">NT Solutions Sp. z o.o.</p>
            <p class="text-gray-500">2015 - 2018</p>
          </div>
        </div>
      </article>

      <article class="mt-8">
        <div class="bg-slate-700 text-white px-4 py-2 rounded-full inline-flex items-center">
          <Icon name="prime:images" size="24" />
          <span>Portfolio</span>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-2">
          <Card v-for="i in 4"/>
        </div>
      </article>

      <article class="mt-8">
        <div class="bg-slate-700 text-white px-4 py-2 rounded-full inline-flex items-center">
          <Icon name="prime:address-book" size="24" />
          <span>Contact</span>
        </div>
        <div>
          form
        </div>
      </article>
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.fixed-profile {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  overflow: hidden;
}

.scrollable-content {
  margin-left: 30%;
  height: 100vh;
  overflow-y: auto;
  width: 70%;
}

@media (max-width: 1024px) {
  .fixed-profile {
    position: relative;
    width: 100%;
    height: auto;
  }

  .scrollable-content {
    margin-left: 0;
    width: 100%;
  }
}
</style>