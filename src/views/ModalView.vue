<script setup>
// import carouselWrapper from "./CarouselWrapper.vue";
// import { computed } from 'vue'
import { useProjectStore } from '@/stores/project';

const store = useProjectStore();

// const showCarousel = computed(() => {
//     if (this.$store.state.activeImages.length > 1) {
//         // console.log(this.$store.state.activeImages)
//         return true
//     }
//     return false;
// })


// const getImageInfo = computed(() => {
//     if (this.$store.state.activeImages.length > 0) {
//         return this.$store.state.activeImages[0];
//     }
//     return
// })


const getImageSource = () => {
    if (store.activeImages.length > 0) {
        // let img = "../../assets/images/art/" +

        return store.activeImages[0].img_path;
    }
}
const closeModal = (e) => {
    if (
        e.target !== e.currentTarget &&
        e.currentTarget !== document.querySelector(".modal-close")
    ) {
        return;
    }
    document.querySelector("body").style.overflow = "auto";
    store.deactivateImages()
    store.toggleModalOpen()

}

</script>

<template>
    <div class="modal-overlay">
        <div class="modal-close" v-on:click="closeModal">
            <img src="../assets/close.svg" />
        </div>
        <div class="modal-content" v-on:click="closeModal">
            <!-- <carousel-wrapper v-if="showCarousel"></carousel-wrapper> -->
            <!-- <div class="modal-content-item" v-else> -->
            <img class="modal-image" alt="" :src="getImageSource()" />
            <!-- <div class="modal-image-details">
                <div class="modal-image-title">
                    {{ getImageInfo.title !== "" ? getImageInfo.title : untitled }}
                    <span>({{ getImageInfo.year }})</span>
                </div>
                <div class="modal-image-materials" v-if="'materials' in getImageInfo">
                    {{ getImageInfo.materials }}
                </div>
                <div class="modal-image-dimensions" v-if="'dimensions' in getImageInfo">
                    {{ getImageInfo.dimensions }}
                </div>
            </div> -->
            <!-- </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @import '../../assets/styles/main.scss';

.modal {
    &-overlay {
        cursor: pointer;
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.85);
    }

    &-close {
        height: 15px;
        width: 15px;
        position: absolute;
        right: 0;
        padding: 20px;
        z-index: 5;

        img {
            width: 100%;
            cursor: pointer;
        }
    }

    &-content {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
    }

    &-content-item {
        cursor: auto;
        max-height: 80vh;
        max-width: 85vw;
    }

    &-image {
        display: block;
        max-width: 83vw;
        max-height: 75vh;

        &-details {
            line-height: 1.6;
            margin-top: 10px;
        }

        &-title {
            font-size: 24px;

            span {
                font-size: 16px;
            }
        }

        //         @include breakpoint(tablet-portrait) {
        //             &-details {
        //                 font-size: 14px;
        //             }

        //             &-title {
        //                 font-size: 20px;

        //                 span {
        //                     font-size: 14px;
        //                 }
        //             }
        //         }
    }
}



// }</style>
