<template lang="pug">
  div
    Nav(:search="text" @update:results="searchData")
    .container.d-flex.flex-column.flex-md-row
      Aside(:itemlist="results" :zonelist="zonelist" @change:Zone="filterZone")
      router-view(:itemlist="filterData" :captureData="capture")
</template>

<script>
import Nav from './component/common/Nav'
import Aside from './component/common/Aside'
import './assets/all.css'

export default {
  props: ['id'],
  components: {
    Nav,
    Aside,
  },
  data() {
    return {
      text: '',
      results: [],
      filterData: [],
      capture: [],
    };
  },
  methods: {
    searchData(val) {
      this.results = val;
      this.filterData = val;
    },
    filterZone(val){
      const zoneValue = val.zone.target.value;
      if (zoneValue === '') { return this.filterData = [...this.results] };
      let newData = this.results.filter(item => item.Zone === zoneValue);
      this.filterData = [...newData];
    }
  },
  computed: {
    zonelist() {
      const datas = new Set(this.results)
      const location = new Set();
      for (let item of datas) {
          location.add(item.Zone)
      };
      return [...location];
    }
  },
}
</script>

<style lang="sass">

</style>
