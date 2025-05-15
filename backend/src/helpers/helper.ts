import fs from "fs";
import path from "path";

export const getUsers = () => {
  const filePath = path.join(__dirname, "..", "..", "users.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const lines = fileContent.trim().split("\n");
  const users = lines.map((line) => JSON.parse(line));

  return users;
};
