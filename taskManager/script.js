import fs from "file-system"

let json = {
    tasks: []
};

for (let i = 0; i < 200; i++) {
    json.tasks[i] = {
        name: "Placeholder Name Text",
        task: "Placeholder task definition/description of what is needed to be done",
        id: i
    };
} 

fs.writeFile('./json/tasks.json', JSON.stringify(json, null, 2), function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("File successfully saved!");
    }
});
