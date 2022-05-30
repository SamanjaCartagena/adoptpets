<template>
  <div>
    <b-table striped hover :items="cats"/>
  </div>
</template>

<script>
import cats from '@/data/cats'
export default {
  data () {
    return {
      cats
    }
  }

}
</script>

<style scoped>

</style>
