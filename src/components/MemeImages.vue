<template lang="pug">
  .card.h-100
    .card-header.mt-1 {{image.name}}
    .card-body
      img(:src="image.url" fluid-grow)
    .card-footer
      | Width: {{image.width}}
      | Height: {{image.height}}
</template>
<script>
export default {
  props: ['image']
}
</script>

<style scoped>
img {
  max-height: 200px;
  max-width: 200px;
  width: auto;
}
</style>