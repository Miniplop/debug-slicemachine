<template>
  <section class="section">
    <p class="title" >Hello</p>
    <p>Je suis une section responsive</p>
  </section>
</template>

<script>
export default {
  name: "TestResponsiveWithoutPrismic",
  props: {
  },
}
</script>

<style scoped>
.section {
  position: relative;
  background: red;
  padding: 20px;
  color: #111;
  text-align: center;
  width: calc(100% - 40px);
  margin-bottom: 24px;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>