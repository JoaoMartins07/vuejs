<template>
    <div class="menu">
        <nav>
            <router-link to="/">CATEGORIAS</router-link>
            <router-link :to="{
                name: 'FichaCategoria',
                params: {
                    id: this.$route.params.id
                }
            }">INFO CAT # {{ this.$route.params.id }}</router-link>
            <router-link :to="{
                name: 'ListaProdutos',
                params: {
                    id: this.$route.params.id
                }
            }">PRODUTOS</router-link>
        </nav>
    </div>
</template>

<style scoped>
.menu, .info {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
}

nav {
    display: flex;
    justify-content: center;
}

nav > * {
    flex: 1;
    text-align: center;
    margin: 15px;
    text-transform: uppercase;
    font-weight: bold;
}
</style>

<script>
export default {
}
</script>