<template>
  <div class="text-base md:text-lg md:text-justify md:hyphens-auto">
    <p class="my-2">我于2023年在卢森堡大学获得计算机方向的博士学位。在此之前，我在英国的伯明翰大学获得了计算机硕士学位，之后在浪潮集团做了一段时间的AI。</p>
    <p>我的研究聚焦于用户与AI之间的交互，尤其是与大语言模型等高度自主AI之间的交互。了解人们为什么，什么时候会使用这些人工智能，并探寻背后的决策逻辑与心理过程。我的另一个主要研究方向是虚拟现实（VR）和增强现实（AR）等沉浸式媒体技术，以及这些技术与人工智能的结合。</p>

    <p class="my-2">猫奴一枚。下面是我养过的猫。</p>

    <div class="flex justify-center gap-10 my-6">
      <div class="flex flex-col items-center">
        <img src="/poppi.jpeg" alt="cat2" class="rounded-full w-[150px] h-[150px] object-cover border-1 border-gray-400">
        <p>Poppi</p>
      </div>
      <div class="flex flex-col items-center">
        <img src="/dami.jpg" alt="cat2" class="rounded-full w-[150px] h-[150px] object-cover border-1 border-gray-400">
        <p>Dami (deceased)</p>
      </div>
    </div>
    <div class="h-[200px]"></div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  key(route) {
    return ''
  }
})
</script>

<style></style>