<template>
    <div>
      <h1>Lista de Categorias</h1>
      <ul>
        <li v-for="category in categories" :key="category.id" @click="selectCategory(category)">
          {{ category.name }}
        </li>
      </ul>
  
      <div v-if="selectedCategory">
        <h2>Produtos da Categoria: {{ selectedCategory.name }}</h2>
        <ul>
          <li v-for="product in filteredProducts" :key="product.id" @click="selectProduct(product)">
            {{ product.name }}
          </li>
        </ul>
      </div>
  
      <ProdutosInfo :product="selectedProduct" />
    </div>
  </template>
  
  <script>
  import ProdutosInfo from './ProdutosInfo.vue';
  
  export default {
    components: {
      ProdutosInfo
    },
    data() {
      return {
        categories: [
          { id: 1, name: 'Categoria 1' },
          { id: 2, name: 'Categoria 2' }
        ],
        products: [
          { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 100', categoryId: 1 },
          { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', price: 'R$ 200', categoryId: 1 },
          { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3', price: 'R$ 300', categoryId: 2 }
        ],
        selectedCategory: null,
        selectedProduct: null
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product => product.categoryId === this.selectedCategory.id);
      }
    },
    methods: {
      selectCategory(category) {
        this.selectedCategory = category;
        this.selectedProduct = null;
      },
      selectProduct(product) {
        this.selectedProduct = product;
      }
    }
  }
  </script>