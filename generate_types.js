import fs from "fs";

import { remark } from "remark";

import dotenv from "dotenv";
dotenv.config()

const parent_json_file_name = process.env.PARENT_JSON_FILE_NAME;
const parent_json_file_path = "./final_PE/" + parent_json_file_name + "_final_PE.json";
const prompt_paraphrase_json_file_path = "./Type/" + parent_json_file_name + "_type.json";

fs.readFile(parent_json_file_path, "utf8", (readErr, questions_data) => {
  if (readErr) {
    console.error("Error reading the file:", readErr);
    return;
  }

  let questions_data_json = JSON.parse(questions_data);
  

  fs.readFile("./prompt_type.md", "utf8", (err, prompt) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    questions_data_json.forEach((questionObj) => {
      let problem_text = questionObj["question_content"];
      let option_1 = questionObj["option-1"];
      let option_2 = questionObj["option-2"];
      let option_3 = questionObj["option-3"];
      let option_4 = questionObj["option-4"];
      let Explanation=questionObj["Explanation"];
      let answer=questionObj["analyzed answer"];
      let matchness=questionObj["Matchness"];
      let problem_prompt = prompt
    .replace("{{problem_text}}", problem_text)
    .replace("{{Explanation}}", Explanation)
    .replace("{{option_1}}", option_1)
    .replace("{{option_2}}", option_2)
    .replace("{{option_3}}", option_3)
    .replace("{{option_4}}", option_4)
      let description = "";
      remark().process(problem_prompt, (err, file) => {
        if (err) throw err;
        description = String(file);
      });

      questionObj.prompt = problem_prompt;
    });

    const updatedJsonData = JSON.stringify(questions_data_json, null, 2);

    fs.writeFile(prompt_paraphrase_json_file_path, updatedJsonData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("Questions With Prompts JSON file updated successfully");
    });
  });
});
