<template>
    <h1 v-if="produto">{{ produto.nome }}</h1>
    <h1>Info do Produto</h1>

    <menuzone />

    <footer class="footer_section">
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer-col">
                    <div class="footer_detail">
                        <p>
                            ID #
                            <br>
                            {{ produto.id }}
                        </p>
                    </div>
                </div>
                <div class="col-md-4 footer-col">
                    <div class="footer_detail">
                        <p>
                            IDCATEGORIA #
                            <br>
                            {{ produto.idcategoria }}
                        </p>
                    </div>
                </div>
                <div class="col-md-4 footer-col">
                    <div class="footer_detail">
                        <p>
                            NOME
                            <br>
                            {{ produto.nome }}
                        </p>
                    </div>
                </div>
                <div class="col-md-4 footer-col">
                    <div class="footer_detail">
                        <p>
                            PREÇO
                            <br>
                            {{ produto.preco }} €
                        </p>
                    </div>
                </div>
                <div class="col-md-4 footer-col">
                    <div class="footer_detail">
                        <p>
                            QUANTIDADE
                            <br>
                            {{ produto.qtd }} 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
h1 {
    text-align: center;
    color: #fff;
    margin: 50px 10px;
}
</style>

<script>
import Menu from './Menu.vue';

export default {
    data() {
        return {
            produto: this.fetchData(),
        };
    },
    methods: {
        async fetchData() {
            const response = await fetch("http://localhost:3000/produtos/" + this.$route.params.idproduto);
            this.produto = await response.json();
        }
    },
    components: {
        'menuzone': Menu,
    }
};
</script>
