# TypeScript 
## baise ts 

``
    let respons: any = "42";
    let numbericLinght: number = (respons as string).length;
    console.log(numbericLinght);

    type book = {
        name: string;
    };

    let bookString = '{"name": "The Great Gatsby"}';

    let bookObject = JSON.parse(bookString) as book;
    console.log(bookObject.name);

    let value: any;

    value = "Hello, world!";
    value = [1, 2, 3];
    value = 2.5;
    value.toUpperCase(); // This will cause a runtime error if value is not a string
    
    let NewValue: unknown;

    NewValue = "Hello, world!";
    NewValue = [1, 2, 3];
    NewValue = 2.5;

    if (typeof NewValue === "string") {
        NewValue.toUpperCase();
    };

``
