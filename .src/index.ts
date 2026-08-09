    let dirnk = "Chai";
    let cup = Math.random() > 1  ? "coffee" : "tea";

    let chaiFavor:string = "masala";

    chaiFavor = "Ginger chai";

    // union type

    let subs: number | string = "1M";

    let apiRequestStatus: "pending" | "success" | "error" = "success";
        apiRequestStatus = "error";

    let airlineSite: "window" | "aisle" | "middle" = "aisle";
        airlineSite = "window";

    let orders = ["12", "20", "28", "42"];

    let currentOrder: string | undefined;

    for (let order of orders) {
        if (order === "28") {
            currentOrder = order;
            break;
        }

        currentOrder = "11";
    }

    console.log(currentOrder);
    
    // typeNerrowing

    function getChai(kind: string | number) {
        if (typeof kind === "string") {
            return `Making ${kind} chai ...`;
        } else {
            return `Order chai ${kind} `;
        }
    };


    function orderchai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return "Making small cuting chai ...";
    } else if (size === "medium") {
        return "Making medium cuting chai ...";
    } else if (size === "large") {
        return "Making large cuting chai ...";
    } else {
        return `Making ${size} ml cuting chai ...`;
    }
};


    class KulhadChai {
        serve() {
            return `serve kulhad chai`;
        }
    };

    class cutingChai {
        serve() {
            return `serve cuting chai`;
        }
    };

    function serveChai(chai: KulhadChai | cutingChai) {
        if (chai instanceof KulhadChai) {
            return chai.serve();
        }
    };

type ChaiObject = {
    type: string,
    sugar: number,
};

    function isChaiObject(obj: any): obj is ChaiObject {
        return (
            typeof obj === "object" && obj !== null &&  typeof obj.type === "string"
            && typeof obj.sugar === "number"
        )
    };

    type masalaChai = {
        type: "masala",
        sugar: number,
        masala: string,
    };

    type gingerChai = {
        type: "ginger",
        sugar: number,
        ginger: boolean,
    };

    type chaiType = masalaChai | gingerChai;

    function MakeChai(order: chaiType) {
        switch (order.type) {
            case "masala":
                return `Masala chai`
                break;

            case "ginger":
                return `Ginger chai`
                break;
            default:
                return `Unknown chai`
                break;
        }
    };

    // more type

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

    // interface

    type TeaRecipe = {
        water: number,
        milk : number,
    };

    class  MasalaChai implements TeaRecipe {
        milk= 150;
        water= 100;
    };



    interface  CupSize  {
        size:  "small" | "large ";
    };

    class chai implements CupSize {
        size: "small" | "large " = "large "
    };

    