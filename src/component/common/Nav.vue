<template lang="pug">
  nav.navbar.navbar-dark.bg-primary
    .container.d-flex.flex-column.flex-md-row
      .container-md-left
        router-link.navbar-brand.ml-md-5(to="/") 高雄旅遊景點
      .pl-md-5.flex-1
        form.search-form
          div.search-form-block
            i.fas.fa-search
            input.form-control.mr-sm-2.pl-4.bg-primary.text-white.search-1(type="search" placeholder="請輸入景點名稱" aria-label="Search" v-model="text")
            span(v-if="message") {{message}}
</template>

<script>
import debounce from 'lodash/debounce'

const SEARCH_API = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300&q='

export default {
  props: ['searchText'],
  data() {
    return {
      text: this.searchText,
      message: '',
      results: [],
    }
  },
  methods:{
    sync() {
      this.message = '';
      this.$emit('update:results', this.results);
    },
    alertMessage() {
      this.message = 'No Data～'
    },
    search(val) {
      this.axios.get(`${SEARCH_API}${val}`)
      .then(rs => {
        this.results = rs.data.result.records;
        this.results.length === 0 ? this.alertMessage() : this.sync();
      })
    },
  },
  watch:{
    text(val){
      this.searchDebounced(val);
    },
  },
  created() {
    this.searchDebounced = debounce(this.search, 800);
  },
  mounted() {
    this.search('');
  },
}
</script>

<style lang="sass" scoped>
.search-form
  max-width: 400px
  .search-form-block
    position: relative
    i
      color: #fff
      position: absolute
      top: 10px
</style>
