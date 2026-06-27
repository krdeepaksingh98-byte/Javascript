    const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

    console.log(descripter);

    /*console.log(Math.PI);
    Math.PI = 5;
    console.log(Math.PI);
    */
    const Tea = {
        name: "ginger chai",
        price: 100,
        isAvailable: true,

        orderChai: function() {
            console.log("chai nahi bani");
        }
    };

    console.log(Tea);
    
    console.log(Object.getOwnPropertyDescriptor(Tea, 'name'));

    Object.defineProperty(Tea, 'name', {
        writable: false,
        configurable: false,
        enumerable: false,
    });
    
    console.log(Object.getOwnPropertyDescriptor(Tea, 'name'));

    for (let [key, value] of Object.entries(Tea)) {
        if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
        }
        
    };
