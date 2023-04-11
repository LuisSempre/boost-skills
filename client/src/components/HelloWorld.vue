<template>
  <div>
    <h1>YouTube Caption Converter</h1>
    <input v-model="videoId" placeholder="Enter YouTube video ID" />
    <button @click="fetchCaptions">Fetch Captions</button>
    <div v-for="caption in captions" :key="caption.id">
      <h2>{{ caption.snippet.name }}</h2>
      <p>{{ caption.snippet.language }}</p>
      <p>{{ caption.snippet.trackKind }}</p>
      <p>{{ caption.snippet.isAutoSynced }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: '',
      captions: [],
    };
  },
  methods: {
    async fetchCaptions() {
      try {
        const response = await fetch(`/captions/${this.videoId}`);
        const captions = await response.json();
        this.captions = captions.items;
      } catch (error) {
        console.error('Error fetching captions:', error);
      }
    },
  },
};
</script>

