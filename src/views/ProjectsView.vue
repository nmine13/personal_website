<script setup>

// TO DO:
// - add modal
// - correct image information
// - trim or regroup

import ProjectNavMenu from '../components/ProjectNavMenu.vue'
import ProjectsLanding from './ProjectsLanding.vue'
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

// do without setting timeouts -- try imagesloaded package previously used or something else 

onMounted(async () => {
    await router.isReady()
    if (route.fullPath === '/projects') {
        router.push({ hash: '#drawings' })
    }
    if (route.hash !== "#") {
        changeCategory(route.hash.substring(1))
    }
    setTimeout(() => {
        let imgContainer = document.querySelector('.images-wrapper');
        initPackery(imgContainer)
        console.log(store.activeCatDetails, 'ACTIVE')
    }, "2000");
})

onUpdated(async () => {
    await router.isReady()
    console.log("UODATE")
    setTimeout(() => {
        let imgContainer = document.querySelector('.images-wrapper');
        initPackery(imgContainer)
        console.log(store.activeCatDetails, 'ACTIVE')
    }, "2000");
})

</script>

<template>
    <main>
        <div>{{ store.activeCat }}</div>
        <ProjectNavMenu :activeCat=store.activeCat />
        <ProjectsLanding :projectType=store.activeType :projectCat=store.activeCat :catDetails=store.activeCatDetails />
    </main>
</template>
