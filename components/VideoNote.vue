<template>
  <section class="border border-gray-300 rounded-md shadow-md p-4">
    <div class="font-bold md:text-lg pb-3">
      <a target="_blank" :href="props.link">{{ props.title }}</a>
    </div>

    <div class="flex gap-1">
      <div>
        <a :href="props.link" target="_blank"><img
            :src="props.imgRef" class="mx-auto w-full mb-1 rounded-md"></a>
      </div>
    </div>

    <div class="flex mt-3 gap-4">
      <div v-html="props.description">
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {type: String},
  link: {type: String},
  imgRef: {type: String},
  description: {type: String}
})
</script>

<style></style>