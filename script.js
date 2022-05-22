/* Things to think about
-User keyboard events -  how does a user event translate to a Javascript event.
-Getting all the current names from the DOM and storing them, e.g 'allNames'
-Getting the user's search query, e.g.'Karl'
-Making sure we lowercase both 'allNames', and the user search query(this helps with our comparison)
-Looping through 'allNames'to check if 'Karl' exists
-Showing close matches; not showing none-matches 
*/

/*
1. Search bar for the user task
    Task: Capture the user's search query
    1. Add an event listener for 'keyup'
    2. Capture the event in a 'let' called 'searchQuery' - storing the value
    3. Make sure the captured value is lowercase
    4. Log to the console to demonstrate it works
*/
/*
2. Get all the name elements from the DOM
    1. Create a new 'let' called 'allNamesDOMCollection'
    2. Store all the elements of classname 'name' in 'allNamesDOMCollection'
    3. Log to the console 'allNamesDOMCollection' to demonstrate that an HTMLCollection exists
    4. Log out the first index of allNamesDOMCollection and add 'textContent' to view a name
*/
/*
  3.Task: Loop over all our names
    1. Create a new for loop with a incremental counter, called 'counter'
    2. Make sure the counter is less than the allNamesDOMCollection.length in the loop conditional
    3. Declare a const called 'currentName' and store the textContext
    4. Make sure the 'currentName' is lowercase
    5. Log out the 'currentName' so we can see all the names from the loop!
*/

document.getElementById("searchInput").addEventListener("keyup", function (e) {
  let searchQuery = e.target.value.toLowerCase();
  let allNamesDOMCollection = document.getElementsByClassName("name");

  for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
    const currentName =
      allNamesDOMCollection[counter].textContent.toLowerCase();
    console.log(currentName);

    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[counter].style.display = "block";
    } else {
      allNamesDOMCollection[counter].style.display = "none";
    }
  }
});
