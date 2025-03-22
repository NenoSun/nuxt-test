<template>
    <div>
        <div>
            <div class="text-sm md:text-base">
                <div class="flex gap-2 md:gap-4">
                    <div class="w-1/2 space-y-2 md:space-y-4">
                        <VideoNote v-for="(item, index) in items" :key="index" v-show="index % 2 == 0"
                            :title="item.title" :link="item.link" :img-ref="item.imgRef"
                            :description="item.description" />
                    </div>

                    <div class="w-1/2 space-y-2 md:space-y-4">
                        <VideoNote v-for="(item, index) in items" :key="index" v-show="index % 2 != 0"
                            :title="item.title" :link="item.link" :img-ref="item.imgRef"
                            :description="item.description" />
                    </div>
                </div>
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

interface VideoNoteItem {
    title: string;
    link: string;
    imgRef: string;
    description: string;
}


const items: VideoNoteItem[] = [
    {
        title: '如何在学术会议上成为社牛',
        link: 'https://www.bilibili.com/video/BV18gXeYUE5G',
        imgRef: "/socialable-thumbnail.png",
        description: "分享几个能让大家在会议上高效沟通的技巧。"
    },
    {
        title: 'p-value那点事儿',
        link: 'https://www.bilibili.com/video/BV1K99BYfE4i',
        imgRef: "/pvalue-thumbnail.png",
        description: "稍微总结了一下p-value相关的东西。非专业，还请各位指正。"
    },
    {
        title: '发Nature也是一件可悲的事情 ｜ 论文出版的阴暗面',
        link: 'https://www.bilibili.com/video/BV1K99BYfE4i',
        imgRef: "/unethical-publication.png",
        description: "希望以后环境对科研人员好一点。"
    },
    {
        title: '《流浪汉》摇滚改编！吐槽海外求学的崩溃日常',
        link: 'https://www.bilibili.com/video/BV1iQPvefEUT',
        imgRef: "/hobo-cover.png",
        description: '乐队总谱点<a target="_blank" href="https://nenosun.github.io/files/hobo-scores.zip" class="text-blue-500 hover:underline">这里</a>下载。'
    },
    {
        title: '我读论文时的野路子 ｜ 个人经验分享',
        link: 'https://www.bilibili.com/video/BV1acA8evEpt',
        imgRef: "/paper-reading-cover.png",
        description: '我对读论文这件事情的一点心得。'
    },
    {
        title: '作为博士，我是如何高效学习英语的',
        link: 'https://www.bilibili.com/video/BV1A5KWe5EgK',
        imgRef: "/english-learning.png",
        description: '五个技巧帮你快速全面地提高英语水平。'
    },
    {
        title: '硕博留学CV攻略（图文版）',
        link: '/cv-101.png',
        imgRef: "/cv-thumbnail.png",
        description: '一图帮你总结硕博留学CV的书写要点与雷区。更详细的解读与例子可以去看<a target="_blank" href="https://www.bilibili.com/video/BV1HVfYYJErz" class="text-blue-500 hover:underline">视频版</a>。'
    },
    {
        title: 'Become Human | 人机交互发展史',
        link: 'https://www.bilibili.com/video/BV1a5cWeyEa6',
        imgRef: "/hci-evolution-cover.png",
        description: '呕心沥血，费老大劲的视频，咋就没人看呢。在这里重新发一下！'
    },
    {
        title: '出国读博指南101 ｜ 如何寻找理想的博士项目',
        link: 'https://www.bilibili.com/video/BV13z6QYzEeb',
        imgRef: "/phd-programs-cover-compressed.jpg",
        description: '两种方法，帮助大家找到适合自己的博士项目！'
    },
    {
        title: '读博值不值？优缺点解析 + 抉择指南',
        link: 'https://www.bilibili.com/video/BV14RkoYDED3',
        imgRef: "/worth-a-phd-thumbnail.jpg",
        description: '<div class="flex flex-col gap-1"><a target="_blank" href="https://www.findaphd.com/" class="text-blue-500 hover:underline truncate">https://www.findaphd.com/</a><a target="_blank" href="https://www.phdportal.com/" class="text-blue-500 hover:underline truncate">https://www.phdportal.com/</a><a target="_blank" href="https://www.researchgate.net/jobs" class="text-blue-500 hover:underline truncate">https://www.researchgate.net/jobs</a><a target="_blank" href="https://academicpositions.com/find-jobs/" class="text-blue-500 hover:underline truncate">https://academicpositions.com/find-jobs/</a><a target="_blank" href="https://euraxess.ec.europa.eu" class="text-blue-500 hover:underline truncate">https://euraxess.ec.europa.eu</a><a target="_blank" href="https://scholarshipdb.net/" class="text-blue-500 hover:underline truncate">https://scholarshipdb.net/</a></div>'
    }
]
</script>

<style></style>