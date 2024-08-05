import { ref } from 'vue'
import { defineStore } from 'pinia'
import drawPaintData from '../data/drawing.json'
import printsData from '../data/prints.json'
import collageData from '../data/collage.json'
import floralData from '../data/florals.json'
import textileData from '../data/fiber.json'
import musicData from '../data/audio.json'

export const useProjectStore = defineStore('project', () => {
  const activeCat = ref('drawings')
  const activeType = ref('visual')
  const activeCatDetails = ref(drawPaintData.items)
  console.log(activeCatDetails, 'ACTIVE')

  function activateProjectCategory(cat) {
    activeCat.value = cat
    if (cat === 'drawings') {
      activeCatDetails.value = drawPaintData.items
      activeType.value = 'visual' // find different word, since videos are also in part visual
    } else if (cat === 'prints') {
      activeCatDetails.value = printsData.items || []
      activeType.value = 'visual'
    } else if (cat === 'collage') {
      activeCatDetails.value = collageData.items || []
      activeType.value = 'visual'
    } else if (cat === 'plants') {
      activeCatDetails.value = floralData.items || []
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
  }

  return { activeCat, activateProjectCategory, activeCatDetails, activeType }
})
