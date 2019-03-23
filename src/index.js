module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) {       //проверка на четность строки
        return false;
    }

    let bracketsStack = [];

    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < bracketsConfig.length; k++) {  //смотрим по элементам массива bracketsConfig
            if (str[i] === bracketsConfig[k][0]) {
                if (bracketsConfig[k][0] !== bracketsConfig[k][1]) { //если нет одинаковых скобок
                    bracketsStack.push(str[i]);
                    break;
                } else { //если скобки 1 и 2 повторяются
                    if (bracketsStack.length === 0) { //если стек пуст - то добавляем скобку
                        bracketsStack.push(str[i]);
                        break;
                    } else {
                        if (bracketsStack[bracketsStack.length - 1] !== str[i]) { // если стек не пуст, но последний элемент не равен повторяющейся скобке, то добавляем, иначе ничего не добавляем, а переходим на проверку второй скобки
                            bracketsStack.push(str[i]);
                            break;
                        }
                    }
                }
            }

            if (str[i] === bracketsConfig[k][1] && bracketsStack[bracketsStack.length - 1] === bracketsConfig[k][0]) {
                if (bracketsStack.length !== 0) {
                    bracketsStack.pop();
                } else {
                    return false;
                }
            }
        }
    }

    return bracketsStack.length === 0;

};
