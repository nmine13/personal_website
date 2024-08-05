<script>

export default {
  name: "MusicView",
  props: {
    audioData: Array,
  }
};
</script>

<template>
  <div class="music-wrapper">
    <div class="music-max-songs">
      <div class="music-song" v-for="audioItem in audioData" :key="audioItem.id">
        <div class="music-song-title">{{ audioItem.title }}</div>
        <div class="music-song-text">{{ audioItem.text }}</div>
        <audio class="music-song-audio" controls :src=audioItem.path></audio>
      </div>
    </div>
  </div>
</template>
