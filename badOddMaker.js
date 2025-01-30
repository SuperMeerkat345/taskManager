import * as fs from "node:fs/promises"

async function makeOddChecker (n) {
    let code = 
    `// Returns true if number is odd, returns false if not (assuming num is a 15 bit number)
     
function isOdd (num) {\n`;
    
    for (let i = -1*n; i <= n; i += 2) {
        if (i == -1*n) {
            code += `   if(num==${i}){return false}`;
        }
        else { 
            code += `else if(num==${i}){return false}`;
        }
    }

    code += 
`\n    return true;
}`

    await fs.writeFile("./js/badOdd.js", code);
}

makeOddChecker(32766);