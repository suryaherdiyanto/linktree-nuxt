<template>
    <div class="font-sans w-100 min-h-screen bg-gray-200">
        <TheHeader />

        <div class="container mx-auto py-7 min-h-screen">
            <slot />
        </div>
        <TheFooter />
    </div>
</template>