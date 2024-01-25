const { ref, computed } = Vue;

export const RecipeCard = {
    props: [
        'data',
        'image'
    ],
    template: `
        <div class="recipe-card">
            <h2 class="recipe-card__title">{{ data.name }}</h2>
            <img :src="image" class="recipe-card__image">
            <div class="recipe-card__ingredients"><b>Ingredients</b>
                <div v-for="ingredient in data.ingredients" class="recipe-card__ingredient">- {{ ingredient }}</div>
            </div>
            <div class="recipe-card__instructions"><b>Instructions</b>
                <div v-for="(step, step_number) in data.instructions" class="recipe-card__step"><b>{{ step_number + 1 }}.</b> {{ step }}</div>
            </div>
        </div>
    `,
    setup (props) {

    }
}