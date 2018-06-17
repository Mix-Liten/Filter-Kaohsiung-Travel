<template lang="pug">
  div.d-none.d-md-block
    p.h4
      | 共
      span.text-primary {{itemlength}}
      | 筆搜尋結果 ...
    button.btn.btn-outline-primary.btn-rounded(type="button")
      | Taiwan
      i.far.fa-times-circle
    button.btn.btn-outline-primary.btn-rounded(type="button")
      | Free
      i.far.fa-times-circle
    button.btn.btn-outline-primary.btn-rounded(type="button")
      | Everyday
      i.far.fa-times-circle
</template>

<script>
export default {
  props: ['itemval', 'itemlength'],
}
</script>

<style lang="sass">

</style>
