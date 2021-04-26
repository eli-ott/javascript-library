# javascript-library

1. [String Method](#string-method)
    * [divide()](#stringdivide)
    * [hasNumber()](#stringhasnumber)
    * [swap()](#stringswapoldindex-newindex)
    * [kebab()](#stringkebab)
    * [snake()](#stringsnake)
    * [noWhiteSpace()](#stringnowhtespace)
2. [Array Method](#array-method)
    * [divide()](#arraydivide)
    * [hasNumber()](#arrayhasnumber)
    * [hasCharacter()](#arrayhascharacter)
    * [remove()](#arrayremoveindex1-index2-index3-)
    * [keep()](#arraykeepindex1-index2-index3-)
    * [noExtraSpace()](#arraynoextraspace)
    * [noWhiteSpace()](#arraynowhitespace)
    * [multiply()](#arraymultiplynumber-secondarray)
    * [add()](#arrayaddnumber-secondarray)
    * [subtract()](#arraysubtractnumber-secondarray)

# <p align="center">**Methods**</p>

## <p align="center">`String Method`</p>
### <p align="center">String.divide()*.index*</p>
This method is used to split a string in two part, right in the middle of that string. It return an object with two indexes, the first *index* is firstPartit return the first part of the string the other one is secondPart and return the second part of the divided string.

### <p align="center">String.hasNumber()</p>
This method return true if there is a number inside the string and false if not.

### <p align="center">String.swap(*oldIndex*, *newIndex*)</p>
This method is used to swap two character between them. The index of the old and new one begins at 1, not 0.

### <p align="center">String.kebab()</p>
This method return your string with a kebab case. For exemple if your string is 'hello world' it'll return 'hello-world'.

### <p align="center">String.snake()</p>
This method return your string with a snake case. For exemple if your string is 'hello world' it'll return 'hello_world'.

### <p align="center">String.camel()</p>
This method return your string with a camel case. For exemple if your string is 'hello world' it'll return 'helloWorld'.

### <p align="center">String.noWhiteSpace()</p>
This method is used to remove all the white spaces in a string. For exemple if your string is 'hello world' it'll return 'helloworld'.

## <p align="center">`Array Method`</p>
### <p align="center">Array.divide()*.index*</p>
This method is used to split a array in two part, right in the middle of that array. It return an object with two indexes, the first *index* is firstPartit return the first part of the array the other one is secondPart and return the second part of the divided array. 
### <p align="center">Array.hasNumber()</p>
This method is used to check if there is a number in the array. For exemple if the array is ["hello", "i'm 25"], the method will return. *This method doesn't work on multidimensional array.*
### <p align="center">Array.hasCharacter()</p>
This method is used to check if there is a character in the array. For exemple if the array is [14543, "25", "431e43"], the method will return. *This method doesn't work on multidimensional array.*
### <p align="center">Array.moveTo(*start*, *end*, *[array]*, *position*)</p>
This method is used to move a part of the array to another specific array. If there's no array selected it'll crete a new one. *start* and *end* index begin at 1. The position parameter specify the place where the element will move, you have the choice between **start** and **end**, **start** will move the element at the begining of the newArrat and **end** at the end. If no position is specify it'll move the elements at the end of the new array. 
### <p align="center">Array.remove(*index1*, *index2*, *index3*, *...*)</p>
This method is used to remove a special element from the arrat. Indexes start at 1. For multidimensional array it'll remove all the child array.

### <p align="center">Array.keep(*index1*, *index2*, *index3*, *...*)</p>
This method will remove all the element that are not selected in the parameters. It'll also remove nested arrays. Indexes start at 1.

### <p align="center">Array.noExtraSpace()</p>
This method remove all the extra space at the begining and at the end of the array elements. It'll also remove empty strings.

### <p align="center">Array.noWhiteSpace()</p>
This method remove all the space of the array element. It'll also remove empty string or empty element. For exemple if an element is null or undefined it'll remove it as it'll remove empty strings.

### <p align="center">Array.multiply(*number*, *secondArray*)</p>
This method is used to whether mutiply all the array by a specific number or whether to multiply two array between them. To multiply an array by a number only write your number in the parameter. If you want to multiply an array by an other write *1* in the first parameter and choose your second array in the second parameter. 

### <p align="center">Array.add(*number*, *secondArray*)</p>
Same as the [Array.multiply()](#arraymultiplynumber-secondarray) but it add the number and not multiply them.

### <p align="center">Array.subtract(*number*, *secondArray*)</p>
Same as the [Array.multiply()](#arraymultiplynumber-secondarray) but it subtract the number and not multiply them.

# <p align="center">**Classes**</p>

## Intro
The classes part is quite easy to understand and is easy to use. The concept between this is that you only need to add a class to a *form* for exmple or a *nav* to have an HTML template whithout writing it. You just add the class and the templates 'pop up'.

### How to use it

You just have to import the right script and style. For exemple if you want to use the form templates you have to add the following lines of code in the *head* of your HTML : 
```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/eli-ott/javascript-library/src/class/style/form.css"></link>
```