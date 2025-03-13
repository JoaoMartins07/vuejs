<template>
   
    <h1 v-if="infocategoria">{{ infocategoria.titulo }}</h1>
    <h1>Info da Categoria</h1>


    <menuzone />


    <footer class="footer_section">
        <div class="container">
        <div class="row">


            <div class="col-md-4 footer-col">
                <div class="footer_detail">
                    <p>
                        ID #
                        <br>
                        {{ infocategoria.id }}
                    </p>
                </div>
            </div>
            <div class="col-md-4 footer-col">
                <div class="footer_detail">
                    <p>
                        ORDEM
                        <br>
                        {{ infocategoria.ordem }}
                    </p>
                </div>
            </div>
            <div class="col-md-4 footer-col">
                <div class="footer_detail">
                    <p>
                        TITULO
                        <br>
                        {{ infocategoria.titulo }}
                    </p>
                </div>
            </div>            
        </div>


        </div>
    </footer>  


</template>


<style scoped>
    h1 {text-align:center; color: #fff; margin:50px 10px;}
</style>


<script>


import Menu from './Menu.vue';


export default {
    data() {
        return {
            infocategoria: this.fetchData(),
            dataX: this.fetchDataX(),
        };
    },
    methods: {
        async fetchData() {      
            const response = await fetch("http://localhost:3000/categorias/" + this.$route.params.id);
            this.infocategoria = await response.json();
        },
        async fetchDataX() {      
            const response = await fetch("http://localhost:3000/categorias/" + this.$route.params.id);
            this.dataX = await response.json();
        }


    },
    components: {
        'menuzone': Menu,
    }      
};
</script>
