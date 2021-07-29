import { useForm } from "react-hook-form";
import { useRouter } from "next/dist/client/router";

function AddRecipe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  console.log(errors);

  const router = useRouter();

  const onSubmit = (recipe) => {
      try {
        fetch("https://bb-recipe-api.herokuapp.com/api/recipes", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipe
                // title: recipe.title,
                // ingredient_list: recipe.ingredient_list,
                // instructions: recipe.instructions,
                // estimated_time: recipe.estimated_time
            })
        });
        console.log(recipe);
        reset();
        router.push('/recipes');  
      } catch(err) {
          console.log(err)
      }  
  };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.title && "Title is required"}
          <input
            type="text"
            placeholder="Ingredients"
            {...register("ingredient_list", { required: true })}
          />
          {errors.ingredient_list && "Ingredients are required"}
          <input
            type="text"
            placeholder="Instructions"
            {...register("instructions", { required: true })}
          />
          {errors.instructions && "Instructions are required"}
          <input
            type="text"
            placeholder="Estimated Time"
            {...register("estimated_time", { required: true })}
          />
          {errors.estimated_time && "Estimated Time is required"}
          <input type="submit" />
        </form>
    </div>
  );
}

export default AddRecipe;
