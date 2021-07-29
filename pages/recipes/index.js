import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://bb-recipe-api.herokuapp.com/api/recipes');
    const recipes = await res.json();
  
    
    return {
        props: { recipes }
    };
}

function recipes({ recipes }) {
    return (
        <div>
            {recipes.map(recipe => (
                <Link href={`/recipes/${recipe._id}`} key={recipe._id}>
                    {recipe.title}
                </Link>
            ))}
        </div>
    )
}

export default recipes