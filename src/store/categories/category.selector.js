import {createSelector} from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector([selectCategoryReducer], //input selector-- array of parameters
  (categoriesSlice)=> categoriesSlice.categories) // output selector

export const selectCategoriesMap = createSelector([selectCategories],
  (categories) => 
  { 
  return categories.reduce((acc, category)=> {
    const {title ,items} = category;
    acc[title.toLowerCase()] = items;
    return acc;
  } , {})
  }
  );