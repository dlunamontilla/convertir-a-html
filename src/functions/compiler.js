/**
 * 
 * @param { string } text Ingrese el texto que va a convertir a otro formato
 * @returns { string }
 */
function compile(text) {
    if (typeof text !== "string") return "";
    const data = [];

    /**
     * @type { Array<string> }
     */
    const rows = text.split("\n").map(row => {
        const column = row.split(/(?<=[0-9])[\s]|[\s](?=[0-9])/g);
        return column;
    });

    for (const register of rows) {
        let [a, b, c] = register;


        if (isNaN(a)) continue;
        if (typeof b !== "string") continue;
        if (isNaN(c)) continue;

        b = b.toUpperCase().trim().replace(/\,$/, "");
        c = c.replace(/[\.]+/, "");
        c = Number(c);
        a = Number(a);
        c = c / a;

        data.push({
            volume: a,
            description: b,
            amount: c
        });
    }

    return data;
}

export {
    compile
}