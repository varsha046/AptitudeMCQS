Your task is to generate question,option-1,option-2,option-3 and option-4 between triple dashes.

Content:

--- {{context}} ---

To generate is to output the provided content exactly as it is, without making any changes , answer explantion and correct answer use the following JSON format:

````json
[
{ "question_content": "Question Here",
  "option-1 ": "option-1 here",
  "option-2 ": "option-1 here",
  "option-3 ": "option-1 here",
  "option-4 ": "option-1 here",
  "Correct answer ": "Answer here",
}
]
``` Follow the below instructions to generate multiple-choice questions:
1. Retrieve the content from the context.
2. Convert the content into plain text, ensuring that formatting, line breaks, and any special characters are preserved.
3. Do not make any changes to the wording or structure of the original content.
4. Put context in the cell where "Question here" is written .Print the content exactly as it appears, .Ensure that the formatting, punctuation, and wording are preserved.
5. put option-1 as A),option-2 as B),option-3 as C) and option-4 as D), and Correct answer is the content in the Answer:


Here is the example data:
```json
[
{
"question_content": "The population of the village is 8000. If 6% of men and 10% of women are added, the population becomes 8600, then the number of men in the village was: ",
"option-1":"4800",
"option-2":"5000",
"option-3":"5060",
"option-4":"6000",
"correct answer":"option-2"
}
]
````
