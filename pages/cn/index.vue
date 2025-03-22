<template>
  <div class="max-w-[700px] mx-auto px-4 pb-20">
    <div class="flex flex-col justify-center items-center mb-5 mt-10 ">
      <img alt="Profile Picture" src="/portait-stylized.jpg" class="rounded-full w-[200px] h-[200px]">
      <div class="mt-4 font-bold md:text-xl">孙宁远</div>
      <div class="text-center text-base font-medium md:text-lg md:mt-2">人机交互与介导现实(VR/AR)博士</div>
      <div class="text-center text-base font-medium md:text-lg ">Ph.D. in Human-AI Interaction and Mediated Realities
        (VR/AR)</div>
      <div class="flex mb-1">
        <a href="mailto:ningyuan.sun.2022@outlook.com" target="_blank">
          <i class="fa-solid fa-envelope icon text-[20px] md:text-[22px]"></i>
        </a>

        <UButton icon="material-symbols:mail" size="xl"
          class="text-webblue hover:cursor-pointer hover:text-blue-500 hover:shadow-sm"
          @click="navigateTo('mailto:ningyuan.sun.2022@outlook.com', { external: true })" />

        <UModal>
          <UButton icon="ic:baseline-wechat" size="xl"
            class="text-webblue hover:cursor-pointer hover:text-blue-500 hover:shadow-sm" />
          <template #content>
            <div class="py-10 text-center">
              微信号：nenosun
            </div>
          </template>
        </UModal>

        <UButton icon="ri:bilibili-fill" size="xl"
          class="text-webblue hover:cursor-pointer hover:text-blue-500 hover:shadow-sm"
          @click="navigateTo('https://space.bilibili.com/3546597105338963', { external: true, open: { target: '_blank' } })" />

        <UButton icon="mdi:linkedin" size="xl"
          class="text-webblue hover:cursor-pointer hover:text-blue-500 hover:shadow-sm"
          @click="navigateTo('https://www.linkedin.com/in/nenosun', { external: true, open: { target: '_target' } })" />

      </div>

      <div class="border-t-1 border-b-1 border-gray-400 w-full">
        <UTabs :items="items" :content="false" color="secondary" v-model="tabVal"></UTabs>        
      </div>

      <NuxtPage class="mt-8" />
    </div>

    <div class="text-center mt-20 border-gray-300 border-t-[1px]">
      <p class="text-gray-400 text-sm mt-3">Last Update: 2025-03-22</p>
      <p class="text-gray-400 text-sm">&copy; Dr. Ningyuan Sun 2024-2025</p>
    </div>

  </div>
</template>

<script lang="ts" setup>
const tabVal = ref()
const route = useRoute()
const router = useRouter()
interface item {
  label: string, to: string
}
const items: item[] = [
  { label: '咨询指导', to: '/cn/consultation' },
  { label: '视频资料', to: '/cn/videos' },
  { label: '个人信息', to: '/cn/aboutme' },
  { label: '论文发表', to: '/cn/publications' }
]

if (route.path == '/cn') {
  navigateTo('/cn/consultation', { replace: true })
}

watch(tabVal, () => {
  navigateTo(items[tabVal.value].to, { replace: true })
})

watch(route, () => {
  for (let i = 0; i < items.length; i++) {
    if (route.path === items[i].to) {
      console.log('triggered')
      tabVal.value = `${i}`
      console.log(tabVal.value)
      break
    }
  }
})
</script>

<style></style>