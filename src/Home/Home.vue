<template lang="pug">
  div.container-fluid.pl-md-5.py-md-4.flex-1.px-0
    Checkable(:itemlength="itemlist.length")
    div(v-for="(item, idx) in itemlist" :key="idx")
      router-link(:to="'{'+idx+'}'")
        Listitem(:itemval="item" :data-capture-id="idx")
    Pagination
</template>

<script>
import Checkable from '../component/homepage/checkable'
import Listitem from '../component/homepage/listitem'
import Pagination from '../component/homepage/pagination'

export default {
  components: {
    Checkable,
    Listitem,
    Pagination,
  },
  props: ['itemlist'],
}
</script>

<style lang="sass" scoped>
a
  &:hover
    text-decoration: none
</style>
