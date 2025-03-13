<template>
    <h1 v-if="infocategoria">{{ infocategoria.titulo }}</h1>
    <h1>Produtos na Categoria</h1>


    <menuzone />


        <div class="row grid mt-5">


          <!-- INICIO DA SEÇÃO A REPLICAR PELOS REGISTOS DEVOLVIDOS-->
          <div class="col-sm-6 col-lg-4 all "  v-for="produto in produtos" :key="produto.id">
            <div class="box">
              <div>
                <div class="detail-box">


                    <router-link
                        :to="{
                            name: 'FichaProduto',
                            params: {
                                id: idcategoria,
                                idproduto: produto.id,
                            }
                        }">
                            <p class="produto">{{ produto.id }}</p>
                            <h5>{{ produto.nome }}</h5>
                            <p>{{ produto.preco }} &euro;</p>                            
                    </router-link>                  
                 
                </div>
              </div>
            </div>
          </div>
          <!-- FIM DA SEÇÃO A REPLICAR PELOS REGISTOS DEVOLVIDOS-->
         
        </div>
</template>


<style scoped>
    h1 {text-align:center; color: #fff; margin:50px 10px;}
    .produto { font-size: 0.8rem; font-style: italic; color: #fc0; }
    .box { color: #fff !important; }
    .detail-box { border: 1px solid #fff; }
</style>


<script>
import Menu from './Menu.vue';
export default {
    data() {
        return {
            infocategoria: this.fetchDataCat(),
            produtos: this.fetchDataProds(),
            idcategoria: this.$route.params.id,
        };
    },  
    methods: {
        async fetchDataCat() {      
            const response = await fetch("http://localhost:3000/categorias/" + this.$route.params.id);
            this.infocategoria = await response.json();
        },
        async fetchDataProds() {      
            const response = await fetch("http://localhost:3000/produtos_cat/" + this.$route.params.id);
            this.produtos = await response.json();
        }
    },      
    components: {
        'menuzone': Menu,
    }
}
</script>