function brainfuckInterpreter(code) {
    const output = [];
    const tape = Array(30000).fill(0);
    let ptr = 0;

    for (let ci = 0; ci < code.length; ci++) {
        switch (code[ci]) {
            case '>': ptr++; break;
            case '<': ptr--; break;
            case '+': tape[ptr]++; break;
            case '-': tape[ptr]--; break;
            case '.': output.push(String.fromCharCode(tape[ptr])); break;
            case ',':
                // input feature not handled
                break;
            case '[':
                if (tape[ptr] === 0) {
                    let loop = 1;
                    while (loop > 0) {
                        ci++;
                        if (code[ci] === '[') loop++;
                        if (code[ci] === ']') loop--;
                    }
                }
                break;
            case ']':
                if (tape[ptr] !== 0) {
                    let loop = 1;
                    while (loop > 0) {
                        ci--;
                        if (code[ci] === ']') loop++;
                        if (code[ci] === '[') loop--;
                    }
                }
                break;
        }
    }

    return output.join('');
}

module.exports = brainfuckInterpreter;