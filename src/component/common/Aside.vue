<template lang="pug">
  div.container-md-left
    .h4.d-flex.d-md-none.justify-content-center.mt-2
      a(data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style="text-decoration:none;")
        span.mr-2 Add filter
        i.fas.fa-plus
    #collapseExample.collapse.d-md-block
      .px-5.py-4.border-bottom.filter
        .h5
          | 地區
        div
          select.form-control(@change="filterZone")
            option(value="") 選擇地區
            option(:value="item" v-for="item in zonelist") {{item}}
      .px-5.py-4.filter
        p.h5 進階篩選
        .form-check
          input#free.form-check-input(type="checkbox" value="")
          label.form-check-label(for="free") 免費參觀
        .form-check
          input#open.form-check-input(type="checkbox" value="")
          label.form-check-label(for="open") 全天候開放
</template>

<script>
export default {
  props: ['itemlist', 'zonelist'],
  data() {
    return {
      items: this.itemlist,
      zoneOption: {
        zone: '',
        free: false,
        allday: false
      }
    }
  },
  methods: {
    filterZone(val) {
      this.zoneOption.zone = val
      this.$emit('change:Zone', this.zoneOption);
    }
  },
}
</script>

<style lang="sass" scoped>
i
  color: #fff
  position: absolute
  top: 10px
</style>
