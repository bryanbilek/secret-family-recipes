import Link from 'next/link'

function NavBar() {
    return (
        <div>
            <div>
            Secret Family Recipes
            </div>
            <div>
                <Link href='/recipes'>
                Recipes
                </Link>
            </div>
            <div>
                <Link href='/add-recipe'>
                Add Recipe
                </Link>
            </div>
        </div>
    )
}

export default NavBar
