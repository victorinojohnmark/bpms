<template>
    <main class="flex flex-col items-center mt-16">
        <div class="text-center my-20">
            <p class="text-base font-semibold text-green-600">403</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Access denied</h1>
            <p class="mt-6 text-base leading-7 text-gray-600">The page you're trying to access has restricted access. <br>
                Please refer to your system administrator.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <router-link :to="{ name: 'Home' }" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Go back home</router-link>
            </div>
        </div>
    </main>
</template>