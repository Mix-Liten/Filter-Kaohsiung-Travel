<template lang="pug">
  div
    nav(aria-label="Page navigation example")
      ul.pagination.justify-content-center.justify-content-md-end
        li.page-item.disabled
          a.page-link(href="#" tabindex="-1") Previous
        li.page-item.active
          a.page-link(href="#") 1
        li.page-item
          a.page-link(href="#") 2
        li.page-item
          a.page-link(href="#") 3
        li.page-item
          a.page-link(href="#") Next
</template>

<script>
export default {}
</script>

<style lang="sass">

</style>
