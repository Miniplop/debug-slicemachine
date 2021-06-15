<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
  </section>
</template>

<script>
export default {
  name: "TestResponsive",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
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