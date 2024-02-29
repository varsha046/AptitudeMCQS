You are now tasked with generating the topic, sub-topic, and difficulty level of a given question. Your task is to analyze the {{Question}}and choose the sub-topic from the provided sub-topics list. Once you have chosen the sub-topic, you need to provide the output in JSON format with the keys "Topic" and "SubTopic".
SubTopics=["SUB_TOPIC_QUANTITATIVE_TSD","SUB_TOPIC_QUANTITATIVE_TIME_AND_WORK",
"SUB_TOPIC_QUANTITATIVE_SIMPLIFICATIONS","SUB_TOPIC_QUANTITATIVE_SIMPLE_AND_COMPOUND_INTEREST",
"SUB_TOPIC_QUANTITATIVE_RATIO_PROPORTIONS","SUB_TOPIC_QUANTITATIVE_PROFIT_AND_LOSS",
"SUB_TOPIC_QUANTITATIVE_PROBLEMS_ON_TRAINS","SUB_TOPIC_QUANTITATIVE_PROBLEMS_ON_AGES",
"SUB_TOPIC_QUANTITATIVE_PROBABILITY","SUB_TOPIC_QUANTITATIVE_PIPES_AND_CISTERNS",
"SUB_TOPIC_QUANTITATIVE_PERMUTATIONS_AND_COMBINATIONS","SUB_TOPIC_QUANTITATIVE_PERCENTAGES",
"SUB_TOPIC_QUANTITATIVE_NUMBERS","SUB_TOPIC_QUANTITATIVE_MIXTURES_ALLEGATIONS",
"SUB_TOPIC_QUANTITATIVE_MENSURATION","SUB_TOPIC_QUANTITATIVE_LCM_HCF",
"SUB_TOPIC_QUANTITATIVE_HEIGHTS_DISTANCES","SUB_TOPIC_QUANTITATIVE_EQUATIONS",
"SUB_TOPIC_QUANTITATIVE_DIVISIBILITY","SUB_TOPIC_QUANTITATIVE_DISCOUNT",
"SUB_TOPIC_QUANTITATIVE_AVERAGES","SUB_TOPIC_QUANTITATIVE_ALGEBRA",
"SUB_TOPIC_QUANTITATIVE_PARTNERSHIPS","SUB_TOPIC_QUANTITATIVE_GEOMETRY",
"SUB_TOPIC_QUANTITATIVE_CHAIN_RULE","SUB_TOPIC_QUANTITATIVE_FUNCTIONS",
"SUB_TOPIC_QUANTITATIVE_LOGARITHMS","SUB_TOPIC_QUANTITATIVE_PROGRESSIONS",
"SUB_TOPIC_QUANTITATIVE_STATISTICS","SUB_TOPIC_QUANTITATIVE_SURDS_INDICES",
"SUB_TOPIC_LOGICAL_WORD_SEQUENCE","SUB_TOPIC_LOGICAL_SYLLOGISMS",
"SUB_TOPIC_LOGICAL_STATEMENTS_AND_CONCLUSIONS","SUB_TOPIC_LOGICAL_PATTERNCOMPLETION",
"SUB_TOPIC_LOGICAL_NUMBER_SERIES","SUB_TOPIC_LOGICAL_LOGICALCHOICE",
"SUB_TOPIC_LOGICAL_GAMEBASEDAPTITUDE","SUB_TOPIC_LOGICAL_ODD_ONE_OUT",
"SUB_TOPIC_LOGICAL_PUZZLES","SUB_TOPIC_LOGICAL_DIRECTIONS",
"SUB_TOPIC_LOGICAL_DI_MCQ","SUB_TOPIC_LOGICAL_DECISIONMAKING",
"SUB_TOPIC_LOGICAL_DATASUFFICIENCY","SUB_TOPIC_LOGICAL_CUBES",
"SUB_TOPIC_LOGICAL_DATAARRANGEMENTS","SUB_TOPIC_LOGICAL_CODING_DECODING",
"SUB_TOPIC_LOGICAL_RANKING","SUB_TOPIC_LOGICAL_CLOCKS",
"SUB_TOPIC_LOGICAL_CALENDARS","SUB_TOPIC_LOGICAL_BLOOD_RELATIONS",
"SUB_TOPIC_LOGICAL_COUNTING_FIGURES","SUB_TOPIC_LOGICAL_ANALOGY",
"SUB_TOPIC_LOGICAL_VENN_DIAGRAM","SUB_TOPIC_LOGICAL_CRYPTO_ARITHMETIC"]

Instructions:

1. You will receive questions. Your job is to identify the topic and a sub-topic and then format the output in JSON with the keys "Topic" and "SubTopic".
2. Analyze each question and choose the most relevant sub-topic from the given list of sub-topics.
3. If the required sub-topic is not in the list, add the required sub-topic in the form of "SUB_TOPIC" and then add "LOGICAL" or "QUANTITATIVE" based on the question. For example, "SUB_TOPIC_LOGICAL_CALENDARS".
4. If "QUANTITATIVE" exists in the sub-topic, put the topic as "TOPIC_QUANTITATIVE_MCQ". Otherwise, put the topic as "TOPIC_LOGICAL_MCQ".
5. In the "difficulty_level" key, do the following: If the question can be answered with Direct formula application, One concept based questions, then the "difficulty_level" will be 0, if it can be answered by 1-2 concept based questions, Sentence formation is complex,Calculation with complex numbers, Questions involving shortcuts, then the "difficulty_level" will be 1 or if it can be answered by more than two concepts involved, Calculations are difficult in nature, Complex concepts are involved, Chances for getting deviated from actual answer is more, then the "difficulty_level" will be 2.
6. Ensure that the output is in JSON format with the correct keys and follows the specified guidelines.

```json
[
  {
    "question_content": "Question Here",
    "difficulty_level": "Difficulty Level Here",
    "SubTopic": "SubTopic Here",
    "Topic": "Topic Here"
  }
]
```

Here is the example data:

```json
[
  {
    "question_content": "The population of the village is 8000. If 6% of men and 10% of women are added, the population becomes 8600, then the number of men in the village was:",
    "difficulty_level": "0",
    "SubTopic": "SUB_TOPIC_QUANTITATIVE_PERCENTAGES",
    "Topic": "TOPIC_QUANTITATIVE_MCQ"
  }
]
```
