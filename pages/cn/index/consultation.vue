<template>
    <div>
        <div class="text-base text-justify hyphens-auto md:text-lg">
            <section class="border-2 border-gray-300 rounded-md shadow-lg p-4 mb-4">
                <div class="flex items-center gap-4 mb-2">
                    <div class="flex-1">
                        <p class="mb-2 text-base">
                            Hi，我提供留学申请和学术论文相关的咨询与指导服务。简单或一次性问题，直接邮件或者微信留言即可。如需1v1指导/服务，欢迎加微信详谈。
                        </p>
                    </div>
                </div>

                <div class="flex items-center justify-center border-t pt-3 border-gray-300 ">
                    <div class="flex items-center gap-2 text-base">
                        <div class="flex items-center">已为</div>
                        <div class="text-blue-600 font-bold text-xl flex items-center">28</div>
                        <div class="flex items-center">位同学服务</div>
                    </div>
                </div>
            </section>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="border border-gray-300 bg-gray-50 p-4 rounded-lg shadow-lg text-center">
                <div class="text-2xl font-bold text-blue-600">3位</div>
                <div class="text-sm text-gray-600">论文辅导</div>
            </div>
            <div class="border border-gray-300 bg-gray-50 p-4 rounded-lg shadow-lg text-center">
                <div class="text-2xl font-bold text-blue-600">5位</div>
                <div class="text-sm text-gray-600">研究计划</div>
            </div>
            <div class="border border-gray-300 bg-gray-50 p-4 rounded-lg shadow-lg text-center">
                <div class="text-2xl font-bold text-blue-600">19位</div>
                <div class="text-sm text-gray-600">硕博申请</div>
            </div>
            <div class="border border-gray-300 bg-gray-50 p-4 rounded-lg shadow-lg text-center">
                <div class="text-2xl font-bold text-blue-600">1位</div>
                <div class="text-sm text-gray-600">其他问题</div>
            </div>
        </div>

        <!-- Desktop masonry layout -->
        <div class="hidden md:block">
            <div class="space-y-3">
                <comments class="flex space-x-3">
                    <comment class="border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                        <img class="mt-4" src="/comments/comment-1.png">
                    </comment>

                    <div class="flex-col space-y-3">
                        <div class="flex border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                            <img class="self-start rounded-md" src="/comments/comment-6.png">
                        </div>
                        <div class="flex space-x-3">
                            <div class="border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                                <img class="self-start rounded-md mt-2 pl-1" src="/comments/comment-7.png">
                            </div>
                            <img class="border-gray-300 border shadow-lg rounded-md" src="/comments/comment-2.png">
                        </div>
                    </div>
                </comments>


                <comments class="flex space-x-3">
                    <div class="flex border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                        <img class="rounded-md" src="/comments/comment-5.png">
                    </div>
                    <div class="border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                        <img class="rounded-md mt-[5px]" src="/comments/comment-10.png">
                    </div>
                </comments>


                <comments class="flex space-x-3">
                    <div class="flex border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                        <img class="rounded-md pr-3 pl-1" src="/comments/comment-9.png">
                    </div>
                    <div class="border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                        <img class="self-stretch rounded-md pl-1" src="/comments/comment-8.png">
                    </div>
                </comments>


                <comments class="flex space-x-3">
                    <div class="flex border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                        <img class="rounded-md" src="/comments/comment-3.png">
                    </div>
                    <div class="flex border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                        <img class="self-start rounded-md mt-[3px]" src="/comments/comment-11.png">
                    </div>
                </comments>


                <comments>
                    <div class="flex space-x-3">
                        <div class="flex border-gray-300 border shadow-lg rounded-md bg-[#f3f3f3]">
                            <img class="rounded-md scale-[95%] -ml-1" src="/comments/comment-4.png">
                        </div>
                    </div>
                </comments>
            </div>


        </div>

        <!-- Mobile layout -->
        <div class="md:hidden space-y-3">
            <div v-for="index in 11" :key="index">
                <img class="border-gray-300 border shadow-lg mx-auto" :src="`/comments/comment-${index}.png`">
            </div>
        </div>
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