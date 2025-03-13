import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'


// importar VUEs
import App from './App.vue'
import Categorias from './components/Categorias.vue'
import CategoriasInfo from './components/CategoriasInfo.vue'
import Produtos from './components/Produtos.vue'
import ProdutosInfo from './components/ProdutosInfo.vue'


const app = createApp(App)


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Categorias },
        { path: '/categoria', component: Categorias },
        { path: '/categoriainfo/:id', name: 'FichaCategoria', component: CategoriasInfo },
        { path: '/produtos/:id', name: 'ListaProdutos', component: Produtos },
        { path: '/produtosinfo/:id/:idproduto', name: 'FichaProduto', component: ProdutosInfo }
    ]
});


app.use(router);
app.mount('#app')
