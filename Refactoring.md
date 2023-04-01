# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

To refactor the function, I used some refactoring techniques to make the reading and the maintainability easy. Before the refactoring I mapped the scenarios and wrote the unit tests. The first choice I've made was handling cases when the event is null. The second one was creating a new function to generate the Hash. After that, I started to implement returns for each statement that makes sense. With that technique It was possible to remove all `else` statements, delete the `candidates` temporary variable and keep the code more readable.

Some techniques I used:
https://sourcemaking.com/refactoring/replace-temp-with-query
https://sourcemaking.com/refactoring/split-temporary-variable
