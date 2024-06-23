<template>
  <div
    class="snap-start snap-always slide-sec mx-auto lg:max-w-7xl pt-8 lg:pt-14 pr-5 xl:pr-[61px] overflow-hidden animate">
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
          <div class="orbit">
            <ul class="orbit-wrap">
              <li class="orbit-center">
                <img src="/images/result_bg.png" class="rounded-full overflow-hidden"/>
              </li>
              <li>
                <ul class="ring-1">
                  <li><Icon name="logos:react" class="orbit-icon" /></li>
                  <li><Icon name="logos:nuxt-icon" class="orbit-icon" /></li>
                  <li><Icon name="logos:redis" class="orbit-icon" /></li>
                  <li><Icon name="logos:openai-icon" class="orbit-icon" /></li>
                  <li><Icon name="logos:typescript-icon" class="orbit-icon" /></li>
                  <li><Icon name="logos:php" class="orbit-icon" /></li>
                  <li><Icon name="logos:tailwindcss-icon" class="orbit-icon" /></li>
                </ul>
              </li>
              <li>
                <ul class="ring-2">
                  <li><Icon name="logos:javascript" class="orbit-icon" /></li>
                  <li><Icon name="logos:vue" class="orbit-icon" /></li>
                  <li><Icon name="logos:css-3" class="orbit-icon" /></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.orbit {
  float: left;
  width: 100%;
  min-width: 40vw;
  min-height: 40vh;
}

.orbit-icon {
  width: 1.6em;
  height: 1.6em;
  line-height: 1.6em;
  font-size: 1.2em;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  display: block;
}

.orbit-wrap {
  height: 16em;
  list-style: none;
  font-size: 1.3em;
}

.orbit-wrap>li {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.orbit-wrap>li:hover~li ul {
  border-color: rgba(255, 255, 255, 0.2);
}

.orbit-wrap>li:hover~li ul li {
  opacity: 0.4;
}

ul[class^=ring] {
  transition: all 300ms ease-in-out;
}

ul[class^=ring] li {
  transition: all 300ms ease-in-out;
}

.ring-1 {
  width: 15em;
  height: 15em;
  -webkit-animation: clockwiseRotate 30s linear infinite;
  animation: clockwiseRotate 30s linear infinite;
}

.ring-1 .orbit-icon {
  -webkit-animation: counterClockwiseRotate 30s linear infinite;
  animation: counterClockwiseRotate 30s linear infinite;
}

.ring-1>*:nth-of-type(1) {
  transform: rotate(47.5deg) translate(7.5em) rotate(-47.5deg);
}

.ring-1>*:nth-of-type(2) {
  transform: rotate(95deg) translate(7.5em) rotate(-95deg);
}

.ring-1>*:nth-of-type(3) {
  transform: rotate(142.5deg) translate(7.5em) rotate(-142.5deg);
}

.ring-1>*:nth-of-type(4) {
  transform: rotate(190deg) translate(7.5em) rotate(-190deg);
}

.ring-1>*:nth-of-type(5) {
  transform: rotate(237.5deg) translate(7.5em) rotate(-237.5deg);
}

.ring-1>*:nth-of-type(6) {
  transform: rotate(285deg) translate(7.5em) rotate(-285deg);
}

.ring-1>*:nth-of-type(7) {
  transform: rotate(332.5deg) translate(7.5em) rotate(-332.5deg);
}

.ring-1>*:nth-of-type(8) {
  transform: rotate(380deg) translate(7.5em) rotate(-380deg);
}

.ring-2 {
  width: 10em;
  height: 10em;
  -webkit-animation: clockwiseRotate 20s linear infinite;
  animation: clockwiseRotate 20s linear infinite;
}

.ring-2 .orbit-icon {
  -webkit-animation: counterClockwiseRotate 20s linear infinite;
  animation: counterClockwiseRotate 20s linear infinite;
}

.ring-2>*:nth-of-type(1) {
  transform: rotate(126.6666666667deg) translate(5em) rotate(-126.6666666667deg);
}

.ring-2>*:nth-of-type(2) {
  transform: rotate(253.3333333333deg) translate(5em) rotate(-253.3333333333deg);
}

.ring-2>*:nth-of-type(3) {
  transform: rotate(380deg) translate(5em) rotate(-380deg);
}

ul[class^=ring] {
  border: solid 1px rgba(33, 150, 243, 0.8);
  position: relative;
  padding: 0;
  border-radius: 50%;
  list-style: none;
  box-sizing: content-box;
}

ul[class^=ring] li {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.6em;
  height: 1.6em;
  margin: -0.8em;
}

/*
  center;
*/
.orbit-center {
  z-index: 5;
  font-size: 2em;
  width: 2em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  border-radius: 50%;
}

.orbit-center:hover .orbit-center__icon {
  transform: rotateZ(0deg);
}

.orbit-center__icon {
  transform: rotateZ(-360deg);
  transition: all 300ms ease-in-out;
}

/* 
animations 
*/
@-webkit-keyframes clockwiseRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes clockwiseRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes counterClockwiseRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes counterClockwiseRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>