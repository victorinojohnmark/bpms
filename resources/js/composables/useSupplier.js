import { ref, reactive } from 'vue';
import { ApiClient } from '../helpers';

export default function useSupplier() {
  const suppliers = ref([])
  const suppliersMeta = ref([])
  const selectedSupplier = ref(null)
  const api = new ApiClient()
  
  async function fetchSuppliers(urlParam = null) {
    try {
        const response = await api.request(`/api/suppliers${ !urlParam ? '' : '?' + urlParam }`, "GET")
        suppliers.value = response
    } catch (error) {
        console.error(error.message)
    }
  }
  
  async function fetchSupplier(id) {
    try {
        const response = await api.request(`/api/suppliers/${id}`, "GET")
        selectedSupplier.value = response
    } catch (error) {
        console.error(error.message)
    }
  }
  
  async function saveSupplier(supplierData) {
    try {
        if(selectedSupplier.value) {
            const response = await api.request(`/api/suppliers/${selectedSupplier.value.id}`, "PUT", supplierData)
            return response
        } else {
            const response = await api.request('/api/suppliers', "POST", supplierData)
            return response
        }
    } catch (error) {
        console.error(error.message)
    }
  }
  
  return {
    suppliers,
    suppliersMeta,
    selectedSupplier,
    fetchSuppliers,
    fetchSupplier,
    saveSupplier,
  };
}