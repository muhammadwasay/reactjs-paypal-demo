export const PorductCatalog = {
    availabilityFilter: 'SHOW_ALL',
    products: [
        {
            pid: 8234723,
            price: 1.50,
            title: 'Latest Laptop',
            description: 'Nulla mollis quam ornare lacus sodales aliquam. Vivamus blandit consectetur iaculis. Nunc gravida lacus non mollis cursus. Nullam imperdiet tellus eu arcu venenatis euismod. Donec ut quam sed justo vehicula suscipit eget eget massa. Proin quis finibus urna. Morbi tortor quam, aliquet ut urna eu, lobortis maximus odio. Quisque sodales ligula viverra urna ultricies interdum. Maecenas eu turpis sed turpis consectetur lobortis sit amet et dui.',
            images: ['/749543-main.jpg', '/749543-detail1.jpg', '/749543-detail2.jpg', '/749543-detail3.jpg', '/749543-detail4.jpg'],
            availability : 'IN_STOCK'
        },
        {
            pid: 3423442,
            price: 1.50,
            title: 'Latest Tablet',
            description: 'Nulla mollis quam ornare lacus sodales aliquam. Vivamus blandit consectetur iaculis. Nunc gravida lacus non mollis cursus. Nullam imperdiet tellus eu arcu venenatis euismod. Donec ut quam sed justo vehicula suscipit eget eget massa. Proin quis finibus urna. Morbi tortor quam, aliquet ut urna eu, lobortis maximus odio. Quisque sodales ligula viverra urna ultricies interdum. Maecenas eu turpis sed turpis consectetur lobortis sit amet et dui.',
            images: ['/749543-detail3.jpg', '/749543-detail1.jpg', '/749543-detail2.jpg', '/749543-detail3.jpg', '/749543-detail4.jpg'],
            availability : 'OUT_OF_STOCK'
        }
    ],
    cart: [],
    checkout: {},
    paymentStatus : {}
}

/*
checkout: {
    noOfItems : 0,
        paymentAmount : 1.33
},
paymentStatus : {
    status : "SUCCESS",
        orderId : "",
        name : "",
        emailAddress : "",
        updateTime : "",
        amount : ""
}*/
