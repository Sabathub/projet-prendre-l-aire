import slugify from 'slugify';

// retourne la recette qui correspond à un slug donné
// eslint-disable-next-line import/prefer-default-export
export const getAreaBySlug = (slug, areas) => {
  // find permet de rechercher le premier élément qui correspond à la condition
  // retourne un seul élément (alors que filter retourne un tableau)
  const searchedRecipe = areas.find((area) => (
    slugify(area.name) === slug
  ));
  return searchedRecipe;
};
