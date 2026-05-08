/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingMinutes) {
  switch (remainingMinutes) {
    case 0: return 'Lasagna is done.';
    case undefined: return 'You forgot to set the timer.';
    default: return 'Not done, please wait.';
  }
}

export function preparationTime(layers, preparationTime = 2) {
  return layers.length * preparationTime;  
}

export function quantities(layers) {
  let noodles = 0, sauce = 0;

  for (let layer of layers) {
    switch(layer) {
      case 'sauce':
        sauce += 0.2;
        break;
      case 'noodles':
        noodles += 50;
        break;
    }
  }

  return {
    noodles: noodles,
    sauce: sauce
  }
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList.at(-1));
}

export function scaleRecipe(recipe, portions) {
  const proportionalRecipe = {};

  for (const [key, value] of Object.entries(recipe)) {
    proportionalRecipe[key] = 0.5 * value * portions;
  }
  return proportionalRecipe;
}