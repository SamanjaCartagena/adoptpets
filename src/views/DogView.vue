<template>
  <div>
    <h1>Dogs for Adoption</h1>
     <pet-table
        species="dogs"
        :pets="dogs"
     >

     </pet-table>
  </div>
</template>

<script>
import PetTable from '@/assets/sass/components/PetTable.vue'
import { mapState } from 'vuex'

export default {
  components: { PetTable },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }

}

</script>

<style>

</style>
