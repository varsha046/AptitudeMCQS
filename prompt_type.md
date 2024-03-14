You are now tasked with generating the question_type,explanation_type and option_types of a given question,explanation and options. 

Instructions:

1. If there is any LaTeX content in the {{problem_text}}, provide "question-type" as LATEX, otherwise provide "question-type" as TEXT .
2. If there is any LaTeX content in the explanation, provide "{{Explanation}}" as LATEX, otherwise provide "Explanation-type" as TEXT.
3. If there is any LaTeX content in {{option_1}}, provide "option-1-type" as LATEX, otherwise provide "option-1 type" as TEXT.
4. If there is any LaTeX content in {{option_2}}, provide "option-2-type" as LATEX, otherwise provide "option-2 type" as TEXT.
5. If there is any LaTeX content in {{option_3}}, provide "option-3-type" as LATEX, otherwise provide "option-3 type" as TEXT.
6. If there is any LaTeX content in {{option_4}}, provide "option-4-type" as LATEX, otherwise provide "option-4 type" as TEXT.
7. Provide the generated problem in a JSON format as demonstrated below.

JSON Format:

```json
[
  {
    "problem_text": "Problem Text Here",
    "question-type": "question type here",
    "option-1": "option-1 Here",
    "option-1 type": "option-1-type here",
    "option-2": "option-2 Here",
    "option-2 type": "option-2-type here",
    "option-3": "option-3 Here",
    "option-3 type": "option-3-type here",
    "option-4": "option-4 Here",
    "option-4 type": "option-4-type here",
    "correct answer": "answerHere",
    "Explanation": "explanation here",
    "Explanation-type": "Explanation type here",
    "analyzed answer": "analyzed answer here",
    "Matchness": "Matchness here"
  }
]
```

Example JSON:

```json
[
  {
    "problem_text": "The population of the village is 8000. If 6% of men and 10% of women are added, the population becomes 8600, then the number of men in the village was:",
    "question-type": "TEXT",
    "option-1": "4800",
    "option-1 type": "TEXT",
    "option-2": "5000",
    "option-2 type": "TEXT",
    "option-3": "5060",
    "option-3 type": "TEXT",
    "option-4": "6000",
    "option-4 type": "TEXT",
    "correcr answer": "option-2",
    "Explanation": "If the number of men in the Village is x, then that of the women will be (8000 - x)\nIf 6% of men and 10% of women are added, the population becomes 8600\nThis means that the additional number is 8600 - 8000 = 600\nTherefore 6% of number of men plus 10% number of women in the village is 600\n= 6% x + 10%(800-x) = 600\n= 6/100 x + 10/100(8000 - x) = 600\n= 0.06x + 0.1(8000- x) = 600\n= 0.06x + 800 - 0.1x = 600\n= 0.06x - 0.1x = 600 - 800\n= -0.04x = - 200\nx = - 200/-0.04\nx = 20000/4\nx = 5000\nTherefore the number of men in that village was 5000",
    "Explanation-type": "TEXT",
    "analyzed answer": "5000",
    "Matchness": "True"
  }
]
```

Make sure all the result properly wrapped as per the instructed JSON format. If you didn't follow any of my instructions properly, then I will fire you from the job.
