<template>
  <div id="about">
    <div class="about">


    </div>

    <div class="backHome" @click="backHome()"><</div>
  </div>
</template>

<script>

  import topBar from '../components/topBar.vue'

  export default {
    name: 'test',
    components: {
      topBar
    },
    // define methods under the `methods` object
    watch: {
      '$route': 'fetchData'
    },
    methods: {

      fetchData: function () {
        console.log('test!')
      },
      backHome: function() {
        this.$router.push( {
          name: 'start'
        })
      }
    }
  }
</script>

<style src="../assets/css/about.scss" lang="scss" scoped>
</style>
