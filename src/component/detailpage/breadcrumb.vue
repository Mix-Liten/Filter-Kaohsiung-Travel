<template lang="pug">
  div
    nav(aria-label="breadcrumb")
      ol.breadcrumb
        li.breadcrumb-item
          router-link(to="/") 首頁
        li.breadcrumb-item.active(aria-current="page") 景點名稱
</template>

<script>
export default {
  props: ['captureData'],
}
</script>

<style lang="sass">

</style>
