<script setup lang="ts">
const form = reactive({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
});
</script>
<template>
    <div class="flex justify-center items-center h-128">
        <div class="w-128">
            <UCard>
                <template #header>
                    <h2 class="font-semibold">Create Account</h2>
                </template>
                <div class="form">
                    <div class="mb-3">
                        <label for="username" class="font-semibold text-gray-600">Username</label>
                        <UInput v-model="form.username" id="username"></UInput>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="font-semibold text-gray-600">Email</label>
                        <UInput v-model="form.email" id="email"></UInput>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="font-semibold text-gray-600">Password</label>
                        <UInput v-model="form.password" id="password" type="password"></UInput>
                    </div>
                    <div class="mb-3">
                        <label for="password_confirmation" class="font-semibold text-gray-600">Password Confirmation</label>
                        <UInput v-model="form.password_confirmation" id="password_confirmation" type="password"></UInput>
                    </div>
                    <div class="flex">
                        <UButton @click.prevent="useGoBack" class="ml-auto" size="xl" color="primary" variant="link">Back</UButton>
                        <UButton class="ml-3" size="xl">Register</UButton>
                    </div>
                </div>
            </UCard>
        </div>
    </div>
</template>