<script setup>
import useCounter from '../composable/useCount.js'
import {useState} from 'vuex-composition-helpers/dist'
import { useStore } from 'vuex';


const store = useStore()
const {number} = useState(['number'])

// v-model updates this variable
let num = ''

const {increment,decrement,reset,setValue} = useCounter(num,store)
</script>

<template>
    <div class="flex justify-end items-center px-4 mt-2">
        <router-link to='/' class="mt-7" >
                <button class="px-3 py-2 bg-blue-900 text-xl font-bold text-white rounded-md border border-blue-900">
                    Return Home
                </button>
            </router-link>
    </div>
    <div class="h-screen counter w-full flex flex-col gap-5 justify-center   items-center">
        <div class="w-5/6 mx-auto flex justify-between items-center   px-2">
            <input type="text" class=" border w-4/6  font-bold text-black border-slatee-200 rounded-md h-10 py-6 outline-none px-3 shadow-md shadow-slate-200" placeholder="set value" v-model="num" />
            <button @click="setValue(num)" class=" text-white border border-blue-900 p-2 rounded-md font-extrabold text-xl">Set</button>
        </div>
        
        <div class="">
            <h1 class="text-6xl font-bold text-blue-900"> {{ number }}</h1>
        </div>
        
        <div>
            <div class="flex justify-center items-center gap-5">
                    <button @click="decrement()" class=" text-white px-2 rounded-ms  py-3 text-xl font-bold">Minus</button>
                    <button @click="reset()" class="bg-red-500 text-white px-2 rounded-ms  py-3 text-xl font-bold">Reset</button>
                    <button @click="increment()" class=" text-white px-2 rounded-ms  py-3 text-xl font-bold">Add</button>
            </div>
        </div> 

            
    </div>
</template>

<style scoped>

    .counter{
    

    }
    

</style>