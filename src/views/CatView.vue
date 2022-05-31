<template>
  <div>
    <pet-table
     species="cats" 
     :pets="cats"></pet-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@components/PetTable.vue'
export default {
  data () {
    return {}
  },
  components:{
   PetTable
  },

  computed: {
    ...mapState([
      'cats'
    ])
  }

}
</script>

<style scoped>

</style>
