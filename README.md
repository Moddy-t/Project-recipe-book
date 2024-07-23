## MAY THE FORK BE WITH YOU RECIPE BOOK
In this project i decided to create an interactive recipe book that contains 20 items. I chose meals that cut across all diets for obvious reasons. 

### Project Description
I wanted to create a recipe finder that a user can search a recipe by inserting a letter in the search input, they get all recipe titles that contain that character.

The user can proceed to be more specific and still get results,so the user can find a recipe by first letter,main ingredient,or a character in the recipe title, I wanted to impliment this so that the user is able to get a recipe even if they just remember the first letter or a character or an ingredient of the recipe.

## HOW TO RUN THE PROJECT
- I created a database that has atleast 20 meal items that cut across all diets for inclusivity and variety.
- I added a HTML file and a CSS file for UI.
- I created a JavaScript file which i used to manipulate the DOM.

#### Manipulating the DOM
- I went ahead and querired my HTML elements using the querry Id.

- I added  a key-up and click event listeners which responds to the enter key up onand performs the search function and a a click that also perorms the same funcion, this means that the search button has  two event listeners.

- I changed the search input value to lowercase to avoid case sensitivity , this makes it easier for the user to use the app.

- I went ahead and fetched from json File, with is data i created a called matchedREcipes that says if the input value is greater than zero, matched recipes to that value is displayed , if there are no results found the user gets a notification in the page to try another search.

- I created a recipe card div that will display the title and image in the inner HTML and gave it a class "recipe-card" and gave it a click event listener such that when the recipe card is clicked it pops up another card that we are going to create just now.

- Now we wre creating that div. It is going to ba a pop up card that holds the attributes of the recipe including a close button.
- To do this we will creare a function that creates elememnts for these attributes in the inner HTML and appended it as a chile of the body.
-We are going to append that innerHtMl to the body of the document.

- In that pop up card i added a there will be a button that we are assigning a click event listner that will remove the child appended from the body.

- I went ahead and created a function for the key up that if the key pressed is the enter key, the button performs the search function.

## VIDEO LINK
https://www.loom.com/share/9beb2de3e0e44f32bffda19e54f18a20?sid=c7cdc64c-0eb4-411b-8a71-165c212ec7d8

## Live project demo link 
[live project demo](https://project-recipe-book.vercel.app/)

