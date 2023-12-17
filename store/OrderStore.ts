import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const url = 'https://6da82525633a209c.mokky.dev/server';

interface orderData {
    title: string;
    orderId: string | number;
    price: string | number;
    quantity: string | number;
    id: string | number;
}

export const useOrderStore = defineStore('orderStore', () => {
    const orders = ref<any>([]);

    const getOrders = async () => {
        try {
            const { data } = await axios.get<orderData[]>(url);
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
