//import fs from "file-system"
import * as fs from "node:fs/promises"

async function initTasksJson () {
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

    await fs.writeFile('./json/tasks.json', JSON.stringify(json, null, 2), function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("File successfully saved!");
        }
    });
}
async function addTask (name, task) {
    try {
        const jsonFile = await fs.readFile('./json/tasks.json', 'utf8');
        let json = JSON.parse(jsonFile);

        json.tasks.push({
            "name": name,
            "task": task,
            "id": json.tasks.length
        });

        await fs.writeFile('./json/tasks.json', JSON.stringify(json, null, 2));
        console.log(`Task added successfully: [${json.tasks.length - 1}] ${name}; ${task}`);
    }
    catch (err) {
        console.error(err);
    }
}

addTask("testTask", "The purpose of this task is for testing purposes only");