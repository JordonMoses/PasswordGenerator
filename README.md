# PasswordGenerator #

## Project ##

This project was a password generator using Javacript. We we're not required to edit or adjust the HTML or CSS. Unfortunately I have struggled with understanding the syntax of Javacript and the various functions. I am just coming to understand alerts, prompts, and confirms. 

I struggled with the concept of loops (although I did use while and if loops). I also am still working on understanding arrays, concatenation, and pulling from and array. After support, I was able to create a master array, and the appropriate if statements that pushed the array elements into a master array. 

Using a getRandom function, I was able to pull the relevant variables from the arrays chosen during the user's prompts. The generate password function works and returns a password based on the users inputs.

Overall, the application functions as intended if a user follows the prompts. Ideally I can update the js to not allow for the loophole. 

## Screenshot ##

![PWGenerator_Screenshot](https://user-images.githubusercontent.com/70240665/96354766-d2f44380-109f-11eb-96f2-c74c2807408b.png)

## JavaScript Example ##

    if (lower === true){
      masterArray.push(lowercase)
    }
  
    if (upper === true){
      masterArray.push(uppercase)
    }
  
    if (numbers === true){
      masterArray.push(numeric)
    }
  
    if (char === true){
      masterArray.push(specialChar)
    } 

## Contribute ##
Appreciate contributions or suggestions on looping the confirm prompts and then breaking the loop once one or more of the prompts equal true. 