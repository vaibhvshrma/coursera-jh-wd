// var company = new Object();

// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = 'Blue';



// console.log(company);
// console.log("Company's CEO's name is: " + company.ceo.firstName);

// //This kind of access can be used for variables names like 'stock of company'; and for variables
// console.log(company['name']);       
// company['stock price'] = 110;
// x = 'stock price';
// console.log(company[x]);


// Object Literal

var facebook = {
    name: 'Facebook',
    ceo: {
        firstName: "Mark",
        favColor: 'Blue'
    },
    "stock price": 110        // This is also an attribute
};


console.log(facebook);