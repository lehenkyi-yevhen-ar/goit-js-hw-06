class StringBuilder {
    #value

//створюємо порожній об'єкт value, і одразу перетворюємо його в рядок

    constructor(initialValue = '') {
        this.#value = initialValue.toString()
    }

//повертаємо значення рядка value

    getValue() {
        return this.#value
    }

//склеюємо наявний ряодок з об'єктом str який перетворюємо в рядок

    padEnd(str) {
        this.#value += str.toString()
    }

//визнаємо, що значення нашого рядка буде дорівнювати об'єкту str, перетвореному в рядок, до якого "доклеєний" наявний рядок
    
    padStart(str) {
        this.#value = str.toString() + this.#value
    }

//викликаємо вже наявний метод (що уточнюємо через this), і вже після того додаємо до зміненого рядка новий об'єкт str, перетворний в рядок

    padBoth(str) {
        this.padStart(str) 
        this.#value += str.toString()
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
