<template>
<div class="background">

  <!-- <img src="../../assets/images/hexa.svg" alt="Kiwi standing on oval" class="hexa" :class="getClassName(n)" :key="n" v-for="n in hexas"> -->
  <div class="cake">
    <img src="../../assets/images/cake.png" alt="">
    <img src="../../assets/images/cake-hover.png" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: 'IntroPage',
  data () {
    return {
      hexas: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    getClassName: function (n) {
      return 'hexa-' + n
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import 'intropage.scss';
</style>
