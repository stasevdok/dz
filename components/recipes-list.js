import { RecipeCard } from './recipe-card.js'

const { ref } = Vue;

export const RecipesList = {
    components: {
        RecipeCard
    },
    template: `
        <div class="recipes-list"> 
            <recipe-card v-for="recipe in recipes" :data="recipe" :image="recipe.image"/>
        </div>
    `,
    setup () {
        const recipes = ref([]);

        function getRecipes () {
            fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(function (data) {
                setTimeout(() => {
                    recipes.value = data.recipes;
                }, 0);
            });
        }

        getRecipes();

        return {
            recipes,
            getRecipes
        };
    }
}