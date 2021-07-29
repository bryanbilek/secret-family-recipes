export const getStaticPaths = async () => {
    const res = await fetch('https://bb-recipe-api.herokuapp.com/api/recipes');
    const recipe = await res.json();

    const paths = recipe.map(recipe => {
        return {
            params: { id: recipe._id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
   
}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const res = await fetch(`https://bb-recipe-api.herokuapp.com/api/recipes/${id}`);
    const recipe = await res.json();

    console.log('context: ', context)

    return {
        props: { recipe }
    }
}


function Recipe({ recipe }) {
    return (
        <div>
            <h1>{recipe.title}</h1>
            <h3>{recipe.instructions}</h3>
            <h4>{recipe.ingredient_list}</h4>
        </div>
    )
}

export default Recipe
