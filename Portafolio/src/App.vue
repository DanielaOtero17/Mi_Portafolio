<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue';
import imageCentral from './components/imageCentral.vue'

</script>

<template>
    <imageCentral></imageCentral>
    <AppBar></AppBar>


  <RouterView />
</template>

<style scoped>

</style>
