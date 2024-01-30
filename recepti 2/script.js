function showRecipe(recipeId) {
    var recipePopup = document.getElementById(recipeId);
    if (recipePopup) {
      recipePopup.style.display = 'block';
    }
  }
  
  function hideRecipe(recipeId) {
    var recipePopup = document.getElementById(recipeId);
    if (recipePopup) {
      recipePopup.style.display = 'none';
    }
  }
  