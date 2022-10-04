<template>
  <div>
    <Topbar />

    <div class="container-fluid">
      <div class="row">
          <Sidebar />
          
          <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Topbar from '../components/admin/Topbar.vue'
import Sidebar from '../components/admin/Sidebar.vue'
// import Footer from '../components/admin/Footer.vue'

</script>

<style>

</style>