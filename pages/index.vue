<template>
  <div class="container">
    <h2 class="title">Slice importé avec la slice zone</h2>
    <slice-zone type="page" queryType="single" />
    <h2 class="title">Slice importé manuellement avec des données statiques</h2>
    <TestResponsiveWithoutPrismic />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
import TestResponsiveWithoutPrismic from "../slices/TestResponsiveWithoutPrismic";

export default {
  components: {
    TestResponsiveWithoutPrismic,
    SliceZone
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 24px;
}
</style>
