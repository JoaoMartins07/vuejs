<template>
    <h1>Lista de Categorias</h1>


    <div class="row">
   
   <div class="col-md-6">
     <p v-for="categoria in categorias" :key="categoria.id">
         <router-link
             :to="{
                 name: 'FichaCategoria',
                 params: {
                     id: categoria.id
                 }
             }">
                 <sup>({{ categoria.id }})</sup> {{ categoria.titulo }}
         </router-link>
     </p>        
   </div>




   <div class="col-md-6 borderX">
     <pre v-if="categorias">Json Returned: <br><br><i>{{ categorias }}</i></pre>
   </div>




 </div>    
</template>
 


<style scoped>
h1 {text-align:center; color: #fff; margin:50px 10px;}
pre { color: #ccc; }
.borderX { border:1px solid #ccc; padding:25px;}
p > * {color : #fff !important; margin:10px; transition-duration: 0.5s; }
p > a:hover { padding:10px; background: #fff; color: #000 !important; transition-duration: 0.5s; }
</style>


<script>
export default {
data() {
return {
    categorias: this.fetchData(),
};
},
methods: {
async fetchData() {      
const response = await fetch("http://localhost:3000/categorias");
  this.categorias = await response.json();
}
}
};
</script>
