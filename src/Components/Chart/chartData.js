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



export  { XAxisData, dataMember, dataTransactions };
