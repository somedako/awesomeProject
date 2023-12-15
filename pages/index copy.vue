<script lang="ts" setup>
import { ref } from 'vue';
const title = ref('');
const price = ref('');
const quantity = ref('');
</script>

<template>
    <div class="wrapper">
        <Order />
        <form class="form">
            <Input
                v-model="title"
                placeholder="Название"
                pattern="^[А-Яа-яЁё\s]+$"
            />
            <Input v-model="price" placeholder="Цена" pattern="^[ 0-9]+$" />
            <Input
                v-model="quantity"
                pattern="^[ 0-9]+$"
                placeholder="Количество"
            />
            <Button
                label="Заказать"
                size="large"
                color="blue"
                :outlined="false"
            />
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global.scss';

.wrapper {
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.form {
    display: flex;
    gap: 30px;
    max-width: 800px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
