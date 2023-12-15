import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const url = 'https://6da82525633a209c.mokky.dev/server';

export const useOrderStore = defineStore('orderStore', () => {
    const orders = ref<string[]>([]);

    const getOrders = async () => {
        try {
            const { data } = await axios.get(url);
            orders.value = data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        orders,
        getOrders,
    };
});
