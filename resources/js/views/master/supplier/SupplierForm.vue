<template>
  <form action="#" class="flex flex-wrap p-4 gap-y-2 bg-gray-50" @submit.prevent>
      <div class="w-full md:w-1/2 px-2">
          <BaseInput v-model="supplier.name" label="Supplier Name" />
      </div>
      <div class="w-full md:w-1/2 px-2">
          <BaseInput v-model="supplier.contactPerson" label="Contact Person" />
      </div>
      <div class="w-full md:w-1/3 px-2">
          <BaseInput v-model="supplier.email" label="Email Address" />
      </div>
      <div class="w-full md:w-1/3 px-2">
          <BaseInput v-model="supplier.contactNumber" label="Contact No." />
      </div>
      <div class="w-full md:w-1/3 px-2">
          <BaseToggle v-model="supplier.isActive" label="Active" />
      </div>
      <div class="inline-flex gap-x-2 w-auto px-2">
          <ButtonPrimary type="submit" label="Save" @click="$emit('save')"/>
          <ButtonDanger type="reset" label="Cancel" @click.prevent="$emit('cancelForm')"/>
      </div>
  </form>
</template>

<script setup> 
import BaseInput from '../../../components/inputform/BaseInput.vue';
import BaseToggle from '../../../components/inputform/BaseToggle.vue';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary.vue';
import ButtonDanger from '../../../components/buttons/ButtonDanger.vue';

const props = defineProps({
    supplier: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['cancelForm', 'save'])

</script>