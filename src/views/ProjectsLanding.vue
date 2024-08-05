<script>

import ProjectItem from '../components/ProjectItem.vue'
import MusicView from '../components/MusicView.vue'
import VideoView from '../components/VideoView.vue'


export default {
    name: 'ProjectsLanding',
    props: {
        projectCat: String,
        catDetails: Array,
        projectType: String
    },
    components: {
        ProjectItem,
        MusicView,
        VideoView
    },
    methods: {
    }
}


</script>

<template>
    <div> {{ projectCat }}</div>
    <div class="images-wrapper">
        <div v-if="projectType === 'music'">
            <MusicView :audioData=catDetails />
        </div>
        <div v-if="projectType === 'visual'">
            <div class="projects-artThumbnails images-item" v-for="item in catDetails" :key="item.img_path">
                <ProjectItem :item=item />
            </div>
        </div>
        <div v-if="projectType === 'video'">
            <VideoView />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.projects {
    &-artThumbnail {
        display: flex;
    }
}

/* @import '../assets/styles/main.scss'; */
</style>