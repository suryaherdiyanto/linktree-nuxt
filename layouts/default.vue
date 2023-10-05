<template>
    <div class="font-sans w-100 min-h-screen bg-gray-200">
        <TheHeader />

        <div class="container mx-auto py-7 min-h-1/2">
            <slot />
        </div>
        <TheFooter />
    </div>
</template>