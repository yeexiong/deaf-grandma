# Deaf Grandma

This small challenge comes from Chris Pine's "Learn to Program".

## Premise

Write a program which can imitate a Grandma who's hard of hearing and follows
these constraints:

* If you don't input anything (just hit enter) she responds with `WHAT?!`
* If you ask a question with any lower-case letters, she responds with
`SPEAK UP, KID!`
* If you ask a question in all upper-case letters, she responds with
`NO, NOT SINCE 1946!`
* The first time you say `GOODBYE!` she says `LEAVING SO SOON?`
* The second time you say `GOODBYE!` she says `LATER, SKATER!` and the program
exits.

## Example

```
HEY KID!
> hi, grandma
SPEAK UP, KID!
> I SAID HI, GRANDMA
NO, NOT SINCE 1946!
>
WHAT?!
> Goodbye!
SPEAK UP, KID!
> GOODBYE!
LEAVING SO SOON?
> GOODBYE!
LATER, SKATER!
```

## Considerations (Ruby)
* In your code you'll definitely need to use `if` and likely an `elsif` and `else`.
* Also remember that `gets` is the "inverse" method of `puts` -- while `puts` outputs information to the terminal, `gets` captures information from the user by presenting a command prompt and allowing them to type input.
* If you have infinite loop, how might you break out of it?

## Considerations (Javascript)
* In your code you'll definitely need to use `if` and likely an `else if` and `else`.
* Will you need [prompt](http://www.w3schools.com/jsref/met_win_prompt.asp) or [prompt](https://github.com/flatiron/prompt)?
* If you have infinite loop, how might you break out of it?

## Challenge Yourself

For a little extra fun, try refactoring your code to use regular expressions.
