<template>
  <div id="about">
    <div class="about">


    </div>

    <div class="backHome" @click="backHome()"><</div>
  </div>
</template>

<script>


  export default {
    name: 'test',
    components: {
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
