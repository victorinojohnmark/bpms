<template>
  <form action="#" class="flex flex-wrap p-4 bg-gray-50" @submit.prevent>
      <div class="w-full md:w-1/2 px-2">
          <BaseInput v-model="supplier.name" label="Supplier Name" />
      </div>
      <div class="w-full md:w-1/2 px-2">
          <BaseInput v-model="supplier.contactPerson" label="Contact Person" />
      </div>
      <div class="w-full md:w-1/3 px-2">
          <BaseInput v-model="supplier.emailAddress" label="Email Address" />
      </div>
      <div class="w-full md:w-1/3 px-2">
          <BaseInput v-model="supplier.contactNumber" label="Contact No." />
      </div>
      <div class="w-full md:w-1/3 px-2">
          <BaseToggle v-model="supplier.isActive" label="Active" />
      </div>
      <div class="w-auto px-2">
          <ButtonPrimary type="submit" label="Save" @click="updateSupplier"/>
      </div>
  </form>
</template>

<script setup> 
import BaseInput from '../../../components/inputform/BaseInput.vue';
import BaseToggle from '../../../components/inputform/BaseToggle.vue';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary.vue';
import { ref, onMounted } from 'vue';
import useSupplier from '../../../models/SupplierModel'

const props = defineProps({
    supplier: {
        type: Object,
        required: true
    }
})
const { supplier } = useSupplier()
const supplierCopy = ref(null)

const emit = defineEmits('update:supplier', supplier)

const updateSupplier = () => {
    emit('update:supplier', supplier)
}

watchEffect(() => {
    supplierCopy.value = props.supplier
    supplier.value = supplierCopy.value
})

onMounted(() => {
    supplier.value = props.supplier
    // console.log(supplier.value)
})


</script>