import  { RecipesList } from './components/index.js'

const { createApp } = Vue;

const Root = {
    template: `
        <v-recipes-list/>
    `,
    setup () {
        
    }
}

const app = createApp(Root);

app.component('VRecipesList', RecipesList)

app.mount('#app');