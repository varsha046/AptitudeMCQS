import fs from "fs";

const parent_json_path = "./parent_json";
const final_PE_path = "./final_PE";
const final_responses_path = "./final_responses";
const final_review_path = "./final_review";
const final_tags_path = "./final_tags";
const Questions_path = "./Questions";
const responses_json_path = "./responses_json";
const responses_PE_path = "./responses_PE";
const responses_tags_path = "./responses_tags";
const Tags_path = "./Tags";
const Type_path="./Type";
const final_type_path="./final_Type";
const responses_type_path="./responses_Type";
const api_responses_path = "./api_responses.json";
const env_path = "./.env";

const createFolder = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true, force: true });
    }
}

const createFile = (file_path, content) => {
    fs.writeFile(file_path, content, 'utf8', (err) => {
        if (err) {
            console.error('An error occurred while writing the file:', err);
            return;
        }
        });
}

function start() {
    try {
        createFolder(parent_json_path);
        createFolder(final_PE_path );
        createFolder(responses_json_path);
        createFolder(final_responses_path);
        createFolder(final_review_path);
        createFolder(final_tags_path);
        createFolder(Questions_path);
        createFolder( responses_PE_path);
        createFolder( responses_tags_path);
        createFolder(Tags_path);
        createFolder( Type_path);
        createFolder( final_type_path);
        createFolder(responses_type_path);
        createFile(api_responses_path, "[]")
        createFile(env_path, "AZURE_API_KEY = \"\"\nPARENT_JSON_FILE_NAME = \"\"\nAZURE_OPENAI_ENDPOINT=\"\"")
    } catch (error) {
      console.error("Error during processing:", error);
    }
}
  
start();