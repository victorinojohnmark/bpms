import { ref } from "vue";

export default function useSupplierModel() {
    const supplier = ref({
        name: '',
        contactPerson: '',
        emailAddress: '',
        contactNumber: '',
        isActive: false
    });

    function createSupplier() {
        // Logic to create supplier
    }

    function updateSupplier() {
        //Logic to update supplier
    }

    return {
        supplier,
        createSupplier,
        updateSupplier
    }
}