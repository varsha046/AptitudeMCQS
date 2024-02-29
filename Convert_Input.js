import fs from "fs";
import { remark } from "remark";
import dotenv from "dotenv";
dotenv.config();

const parent_text_file_path = "./parent_json/input.txt";
const prompts_file_path = "./Questions/prompts.json";

fs.readFile(parent_text_file_path, "utf8", (readErr, data) => {
  if (readErr) {
    console.error("Error reading the file:", readErr);
    return;
  }

  let context_prompt = fs.readFileSync("./prompt.md", "utf8").trim();
  context_prompt = context_prompt.replace("{{context}}", data); // Include all data from TXT file

  let description = remark().processSync(context_prompt).toString();

  const questions_data_json = {
   
    prompt: context_prompt,
  };

  const updatedJsonData = JSON.stringify(questions_data_json, null, 2);

  fs.writeFile(prompts_file_path, updatedJsonData, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log("Prompts JSON file updated successfully");
  });
});
