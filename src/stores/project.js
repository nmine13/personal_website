import { ref } from 'vue'
import { defineStore } from 'pinia'
import drawPaintData from '../data/drawing.json'
import printsData from '../data/prints.json'
import collageData from '../data/collage.json'
import plantData from '../data/plants.json'
import textileData from '../data/fiber.json'
import musicData from '../data/audio.json'
import paintingData from '../data/painting.json'

export const useProjectStore = defineStore('project', () => {
  const activeCat = ref('drawings')
  const activeType = ref('visual')
  const activeCatDetails = ref(drawPaintData.items)
  const modalOpen = ref(false)
  const activeImages = ref([]) // for modal

  console.log(activeCatDetails, 'ACTIVE')

  function activateProjectCategory(cat) {
    activeCat.value = cat
    if (cat === 'drawings') {
      activeCatDetails.value = drawPaintData.items
      activeType.value = 'visual'
    } else if (cat == 'paintings') {
      activeCatDetails.value = paintingData.items
    } else if (cat === 'prints') {
      activeCatDetails.value = printsData.items || []
      activeType.value = 'visual'
    } else if (cat === 'collage') {
      activeCatDetails.value = collageData.items || []
      activeType.value = 'visual'
    } else if (cat === 'plants') {
      console.log(plantData)
      activeCatDetails.value = plantData.items || []
      activeType.value = 'visual'
    } else if (cat === 'fabric') {
      activeCatDetails.value = textileData.items || []
      activeType.value = 'visual'
    } else if (cat === 'music') {
      activeCatDetails.value = musicData.items || []
      activeType.value = 'music'
    } else if (cat === 'video') {
      // activeCatDetails.value = musicData.items || []
      activeType.value = 'video'
    }
    //  else if (cat === 'threeD') {
    //   // activeCatDetails.value = musicData.items || []
    //   activeType.value = 'threeD'
    // }
    //  else if (cat === 'sketchbook') {
    //   // activeCatDetails.value = musicData.items || []
    //   activeType.value = 'sketchbook'
    // }
    // NEW PICS OF: Conservatory, Vermont, Coffee sink, spinocuts, bright
    // Standardize border
    // find different word, since videos are also in part visual
    // ADD: Ravine, Dwelling, Compilation?
    // Add border, ie take diff pictures
  }

  function toggleModalOpen() {
    modalOpen.value = !modalOpen.value
  }

  function activateImages(images) {
    activeImages.value = images
  }

  function deactivateImages() {
    activeImages.value = []
  }

  return {
    activeCat,
    activateProjectCategory,
    activeCatDetails,
    activeType,
    activeImages,
    toggleModalOpen,
    activateImages,
    deactivateImages,
    modalOpen
  }
})
