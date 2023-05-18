<template>
    <!-- <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <div class="inline-flex items-center gap-x-2">
            <ButtonDefault button-name="Export List" />
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">{{ startIndex }}</span> to
                    <span class="font-medium">{{ endIndex }}</span> of
                    <span class="font-medium">{{ total }}</span> results
                </p>
            </div>
        </div>
        
    </div> -->

    <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Previous</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                </svg>
            </a>
            <!-- Current: "z-10 bg-green-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
            <a href="#" class="relative z-10 inline-flex items-center bg-green-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">1</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
            <!-- <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span> -->
            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
            <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Next</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
            </a>
        </nav>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  const props = defineProps({
      total: {
          type: Number,
          required: true,
      },
      perPage: {
          type: Number,
          required: true,
      },
      currentPage: {
          type: Number,
          required: true,
      },
      startIndex: {
        type: Number,
        default: 0
      },
      endIndex: {
        type: Number,
        default: 0
      }
  })

  const pagination = reactive({
      currentPage: props.currentPage,
  });

  const totalPages = Math.ceil(props.total / props.perPage);

  props.startIndex = (props.currentPage - 1) * props.perPage + 1;
  props.endIndex = Math.min(props.currentPage * props.perPage, props.total);

  const previousPage = () => {
      if (pagination.currentPage > 1) {
          pagination.currentPage--;
      }
  };

  const nextPage = () => {
      if (pagination.currentPage < totalPages) {
          pagination.currentPage++;
      }
  };

  const goToPage = (page) => {
      if (page !== pagination.currentPage && page >= 1 && page <= totalPages) {
          pagination.currentPage = page;
      }
  };
  </script>
  