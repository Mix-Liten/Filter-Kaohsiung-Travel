<template lang="pug">
  .card.flex-xl-row.my-4
    .bg-cover.bg-xl-cover.bg-md-cover.rounded-xl-left.rounded-top(:style="{backgroundImage: 'url(' + itemval.Picture1 + ')' }")
    .card-body.flex-1
      h4.text-primary {{itemval.Name}}
      p {{summary}}
      p.font-weight-bold Read More
      span.card-xl-icon.card-icon
        i.fas.fa-map-marker-alt
        span.text-black-50 {{itemval.Add}}
      span.card-xl-icon.card-icon
        i.fas.fa-dollar-sign
        span.text-black-50 {{itemval.Ticketinfo}}
      span.card-xl-icon.card-icon
        i.far.fa-calendar-alt
        span.text-black-50 {{itemval.Opentime}}
</template>

<script>
export default {
  props: ['itemval'],
  computed: {
    summary() {
      return this.itemval.Description.length > 100 ? this.itemval.Description.slice(0, 97) + '...' : this.itemval.Description;
    },
  },
}
</script>

<style lang="sass" scoped>
.card
  color: #000
.bg-cover
  background-size: cover
  background-position: center center
</style>
