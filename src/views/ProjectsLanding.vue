<script>

import ProjectItem from '../components/ProjectItem.vue'
import MusicView from '../components/MusicView.vue'
import VideoView from '../components/VideoView.vue'
import { useProjectStore } from '@/stores/project';

const store = useProjectStore();

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
        openModal: (item) => {
            const images = 'img_set' in item ? item.img_set : [item]
            document.querySelector('body').style.overflow = 'hidden'
            store.activateImages(images)
            store.toggleModalOpen()
        }
    }
}


</script>

<template>
    <div class="images-wrapper">
        <div v-if="projectType === 'music'">
            <MusicView :audioData=catDetails />
        </div>
        <!-- <div v-if="projectType === 'visual'"> -->
        <div class="projects-artThumbnails images-item" v-for="item in catDetails" :key="item.img_path">
            <ProjectItem v-on:click="openModal(item)" :item=item />
        </div>
        <!-- </div> -->
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

.images-wrapper {
    width: 75%;
}

/* @import '../assets/styles/main.scss'; */
</style>