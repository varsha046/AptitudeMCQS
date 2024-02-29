### Initialization

Installation of nodeJs software from [node](https://nodejs.org/en/download)  
Open this directory in terminal and run `npm install` or `npm i`.  
After the installation of dependencies, run `npm run setup`.

### Steps

Step-1:-Now save your text file in **parent_json** directory.
Step-2:- Replace **parent_json_file_name** variable in .env file with the .txt filename.  
Step-3:- Run the following command in terminal: `node Convert_Input.js`.  
Step-4:- Run the following command in terminal: `node generate_responses.js`.
Step-5:- Run the following command in terminal: `node generate_final.js`.
Step-6:- Run the following command in terminal: `node generate_PE.js`.
Step-7:- Run the following command in terminal: `node generate_responsesPE.js`.
Step-8:- Run the following command in terminal: `node generate_finalPE.js`.
Step-9:- Run the following command in terminal: `node generate_tags.js`.  
Step-10:- Run the following command in terminal: `node generate_responsestags.js`.  
Step-11:- Run the following command in terminal: `node generate_finaltags.js`.
step-12:- Copy the json from **final_tags** irectory with suffix as "\_final_tags.json" file.
step-13:- Now convert your json into csv file [json_to_csv](https://csvjson.com/json2csv) .
step-14:- Add "Source" and "Company" as column headers, and then enter the corresponding source and company name for each question.
step-15:- Now convert your csv into json file [csv_to_json](https://csvjson.com/csv2json) .
Step-16:- Save the JSON file as .txt filename .json in the "final_review" directory.
Step-17:- Run the following command in terminal: `node generate_sheet.js`.
Step-18:- Now You can find your final output file in **Final_sheet** directory with suffix as "\_final_sheet.json" file.
step-19:- Now convert your json into csv file [json_to_csv](https://csvjson.com/json2csv) .

### Limitations

1. You can create a maximum of 20 questions at a time.

2. If your question includes LaTeX formatting, please enter it without parentheses,

for example: What is the value of (\frac{(5-2*10-4)}{(2-5*5-6)})? should be coverted as
What is the value of  \frac{(5-2*10-4)}{(2-5*5-6)} ?

3. Answers containing LaTeX formatting will be displayed as \ frac{(5-2\times10-4)}{(2-5\times5-6)}, removing any extra spaces between backslashes and frac.
