<script setup lang="ts">
const form = reactive({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
});
</script>
<template>
    <div class="flex justify-center">
        <div class="w-3/4 mt-5">
            <UCard>
                <template #header>
                    <h2 class="font-semibold">Login</h2>
                </template>
                <div class="form">
                    <div class="mb-3">
                        <label for="username" class="font-semibold text-gray-600">Username</label>
                        <UInput v-model="form.username" id="username"></UInput>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="font-semibold text-gray-600">Password</label>
                        <UInput v-model="form.password" id="password" type="password"></UInput>
                    </div>
                    <div class="flex">
                        <UButton class="ml-auto" size="xl" color="primary" variant="link">Create Account</UButton>
                        <UButton class="ml-3" size="xl">Log In</UButton>
                    </div>
                </div>
            </UCard>
        </div>
    </div>
</template>