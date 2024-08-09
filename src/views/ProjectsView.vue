<script setup>

// TO DO:
// - add modal
// - correct image information
// - trim or regroup
// - figure out how to activate packery only after images have loaded
// - ADD AN ARTIST STATEMENT
// - Identify thematic collections
// - Add digital and video section -- if i can't compress vids, use stills
// - Current projects section

import ProjectNavMenu from '../components/ProjectNavMenu.vue'
import ProjectsLanding from './ProjectsLanding.vue'
import StatementComponent from '@/components/StatementComponent.vue';
import ModalView from './ModalView.vue';

import { useProjectStore } from '@/stores/project';
import { watch, onMounted, onUpdated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Packery from 'packery';

const route = useRoute()
const router = useRouter()

const store = useProjectStore();

const changeCategory = (cat) => {
    store.activateProjectCategory(cat)
    return
}
const getGutter = () => {
    if (window.innerWidth <= 900) {
        return 10
    }
    return 20
}
const packeryObj = (imgContainer) => {
    return new Packery(imgContainer, {
        itemSelector: ".images-item",
        gutter: getGutter(),
    });
}
const initPackery = (container) => {
    var pckry = packeryObj(container)
    self.pckry = pckry
}

watch(
    () => route.hash,
    () => {
        // look in docs -- might be a way to do this automatically
        if (route.fullPath === '/projects') {
            router.push({ hash: '#drawings' })
        }
        if (route.hash !== "#") {
            changeCategory(route.hash.substring(1))
        }

    }
)

// TODO: do without setting timeouts -- try imagesloaded package previously used or something else 

const initializePackery = () => {
    setTimeout(() => {
        let imgContainer = document.querySelector('.images-wrapper');
        initPackery(imgContainer) // TODO: do I need to initialize it every time or is there a pckery update method?
    }, "1000");
}

onMounted(async () => {
    await router.isReady()
    if (route.fullPath === '/projects') {
        router.push({ hash: '#drawings' })
    }
    if (route.hash !== "#") {
        changeCategory(route.hash.substring(1))
    }
    initializePackery();
})

onUpdated(async () => {
    await router.isReady()
    initializePackery();
})

</script>

<template>
    <main>
        <StatementComponent />
        <div class="projects-wrapper">
            <ProjectNavMenu :activeCat=store.activeCat />
            <ProjectsLanding :projectType=store.activeType :projectCat=store.activeCat
                :catDetails=store.activeCatDetails />
        </div>
        <ModalView v-if="store.modalOpen" />
    </main>
</template>

<style scoped lang="scss">
.projects {
    &-wrapper {
        display: flex;
    }
}
</style>
