<script setup>
import { RouterLink } from 'vue-router'
import Button from '../components/Button.vue'
import Img from '../assets/Calculator.gif'


</script>

<template>
    <main class="h-auto md:h-screen  wrapper md:px-9    px-6 ">

        <div class="w-full mt=5 md:mt-8 py-10 md:py-4 h-auto m">
            <nav class="mt-1 flex justify-between items-center">
                <h2 class="font-extrabold text-3xl "> counter app </h2>
                <RouterLink to="/counter">
                    <button class="text-2xl font-extrabold hidden md:block text-white p-3 rounded h-auto w-auto">
                        counter
                    </button>
                </RouterLink>
            </nav>

            <div class=" mt-10 w-full h-full">
                <div class="grid grid-cols-2 gap-5 w-full h-full ">
                    <div class="col-span-2 md:col-span-1 order-last md:order-first">
                        <div class="flex-vertical  h-full ">
                            <header class="flex-vertical bg-white/70  gap-5 w-10/12">
                                <div>
                                    <h1 class="text-4xl md:text-4xl font-extrabold">
                                        A blend of vue's finest concepts.
                                    </h1>
                                    <h1 class="text-3xl md:text-4xl font-extrabold">
                                        A <span>counter</span>, original and simple.
                                    </h1>
                                </div>
                                <p class="text-light">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aliquid ipsam,
                                    fugit nemo temporibus voluptate!
                                </p>
                                <p class="text-light">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aliquid ipsam,
                                    fugit nemo temporibus voluptate!
                                </p>
                                <RouterLink to="/counter">
                                    <button class="text-2xl font-extrabold text-white p-3 rounded h-auto w-auto">
                                        counter
                                    </button>
                                </RouterLink>


                            </header>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1 w-full ">
                        <div class="flex-centered ">
                            <img :src="Img" alt="photo" class="" />
                        </div>
                    </div>
                </div>



            </div>


            <div class="h-40 md:h-0">

            </div>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,700&display=swap');

.wrapper {
    font-family: 'Alegreya', serif;
}

.img {
    width: 500px;
    height: 600px;
}
</style>

