const XAxisData  = [
    {"name" : 'Jan' ,
        "sale" : 112_000
    },

        {"name" : 'Feb' ,
        "sale" : 99_000
    },


        {"name" : 'Mar' ,
        "sale" : 12_090
    },


        {"name" : 'Apr' ,
        "sale" : 99_000
    },

        {"name" : 'May' ,
        "sale" : 54_000
    },

        {"name" : 'Jun' ,
        "sale" : 85_000
    },


        {"name" : 'Jul' ,
        "sale" : 34_000
    },
        {"name" : 'Agu' ,
        "sale" : 18_598
    },
        {"name" : 'Sep' ,
        "sale" : 0
    },
        {"name" : 'Oct' ,
        "sale" : 73_000
    },
        {"name" : 'Nov' ,
        "sale" : 12_900
    },
        {"name" : 'Dev' ,
        "sale" : 97_000
    },


]


const dataMember= [
    {id : 1 , name : 'Mohammad Hossein' , side : 'Boss' , img : '/images/profile.jpg'},
    {id : 2 , name : 'Ali' , side : 'FullStack' , img : '/images/profile2.jpg'},
    {id : 3 , name : 'Hassan' , side : 'Python Developer' , img : '/images/profile3.jpg'},
]


const dataTransactions = [
    {
        id : 1,
        customer : 'Mohammad Hossein',
        date : '12 Jun 2024 ',
        amount : '$122.0',
        status : 'Declined',
        img : '/images/profile.jpg'
    },
        {
        id : 2,
        customer : 'Ali Karimi',
        date : '12 Jun 2024 ',
        amount : '$122.0',
        status : 'Pending',
        img : '/images/profile2.jpg'
    },
            {
        id : 3,
        customer : 'Mohammad Hassan',
        date : '12 Jun 2024 ',
        amount : '$122.0',
        status : 'Approved',
        img : '/images/profile3.jpg'
    }
    
]

    const userData = [
    { id: 1, user: 'Snow', email: 'Jon@gmail.com', status: 'active',transaction : '$120.00' },
    { id: 2, user: 'Lannister', email: 'Cersei@gmail.com', status: 'active',transaction : '$120.00' },
    { id: 3, user: 'Lannister', email: 'Jaime@gmail.com', status: 'active',transaction : '$120.00' },
    { id: 4, user: 'Stark', email: 'Arya@gmail.com', status: 'active',transaction : '$120.00' },
    { id: 5, user: 'Targaryen', email: 'Daenerys@gmail.com', status: 'active',transaction : '$120.00' },
    { id: 6, user: 'Melisandre', email: null, status: 'active',transaction : '$120.00' },
    { id: 7, user: 'Clifford', email: 'Ferrara@gmail.com', status: 'active',transaction : '$120.00' },
    { id: 8, user: 'Frances', email: 'Rossini@gmail.com', status: 'active',transaction : '$120.00' },
    { id: 9, user: 'Roxie', email: 'Harvey@gmail.com', status: 'active',transaction : '$120.00' },
    ];


    const productData = [
    { id: 1, product: 'Iphone 13', stock: '1500', status: 'active',price : '$150.00', img : '/images/product1.jpg' },
    { id: 2, product: 'Iphone 12', stock: '1200', status: 'active',price : '$110.00', img : '/images/product2.jpg' },
    { id: 3, product: 'Iphone 17', stock: '1400', status: 'active',price : '$120.00', img : '/images/product3.jpg' },
    { id: 4, product: 'Iphone 11', stock: '1600', status: 'active',price : '$140.00', img : '/images/product4.jpg' },
    { id: 5, product: 'Iphone 10', stock: '1100', status: 'active',price : '$110.00', img : '/images/product5.jpg' },
    { id: 6, product: 'Iphone 18', stock: '1200', status: 'active',price : '$190.00', img : '/images/product6.jpg' },

    ];


    const productData2 = [
        {
            name : 'Jan',
            sales : 1000,
        },
                {
            name : 'Feb',
            sales : 3000,
        },
                {
            name : 'mar',
            sales : 2000,
        },
    ]



export  { XAxisData, dataMember, dataTransactions, userData, productData, productData2};
