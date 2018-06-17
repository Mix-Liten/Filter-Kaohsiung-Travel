<template lang="pug">
  div.container-fluid.pl-md-5.py-md-4.flex-1.px-0
    breadcrumb(:captureData="captureData")
    capture(:captureData="captureData")
</template>

<script>
import breadcrumb from '../component/detailpage/breadcrumb'
import capture from '../component/detailpage/capture'

export default {
  components: {
    breadcrumb,
    capture,
  },
  props: ['captureData', 'id'],
  data() {
    return {}
  },
}
</script>

<style lang="sass">

</style>
