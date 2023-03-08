const db = {
    cobrancas_vencidas:[
        {nome: "Sara Silva", id_cob:223456787, valor:100000},
        {nome: "Carlos Prado", id_cob:223456781, valor:40000},
        {nome: "Lara Brito", id_cob:223456783, valor:90000},
        {nome: "Soraia Neves", id_cob:223156787, valor:70000},
    ],
    cobrancas_previstas:[
        {nome: "Sara Silva Joaquina Ambrosio", id_cob:223456789, valor:200000},
        {nome: "Carlos Prado", id_cob:223456785, valor:40000},
        {nome: "Lara Brito", id_cob:223456784, valor:90000},
        {nome: "Soraia Neves", id_cob:223456790, valor:70000},
    ],
    cobrancas_pagas:[
        {nome: "Sara Silvaz", id_cob:223456771, valor:350000},
        {nome: "Carlos Prado", id_cob:223456773, valor:40000},
        {nome: "Lara Brito", id_cob:223456777, valor:90000},
        {nome: "Soraia Neves", id_cob:223456770, valor:70000},
        {nome: "Joanes Barbosa Lil", id_cob:323456770, valor:70000},
    ],
    clientes_ina:[
        {nome:"Cameron Williamson",data_v:"03/02/2021",valor:50000},
        {nome:"Savannah Nguyen",data_v:"04/03/2021",valor:50000},
        {nome:"Darlene Robertson",data_v:"21/04/2021",valor:50000},
        {nome:"Marvin McKinney",data_v:"08/05/2021",valor:50000}, 
    ],
    clientes_adi:[
        {nome:"Cameron Williamson",data_v:"03/02/2021",valor:50000},
        {nome:"Savannah Nguyen",data_v:"04/03/2021",valor:50000},
        {nome:"Darlene Robertson",data_v:"21/04/2021",valor:50000},
        {nome:"Marvin McKinney",data_v:"08/05/2021",valor:50000}, 
    ],
    clientes:[
        {name:"Sara da Silva Amelia", cpf:'054 365 255 87', email:'sarasilva@cubos.io', phone:'71 9 9462 8654', status:false },
        {name:"Cameron Williamson", cpf:'054 074 255 87', email:'weasd@cubos.io', phone:'71 9 9462 8654', status:false },
        {name:"Sandra dos Santos", cpf:'034 365 255 87', email:'sdasd@cubos.io', phone:'71 9 9462 8654', status:false },
        {name:"Sara da Silva", cpf:'054 365 255 87', email:'sarasilva@cubos.io', phone:'71 9 9462 8654', status:false },
        {name:"Cameron Williamson", cpf:'054 074 255 87', email:'weasd@cubos.io', phone:'71 9 9462 8654', status:false },
        {name:"Sandra dos Santos", cpf:'034 365 255 87', email:'sdasd@cubos.io', phone:'71 9 9462 8654', status:false },
        {name:"Sara da Silva", cpf:'054 365 255 87', email:'sarasilva@cubos.io', phone:'71 9 9462 8654', status:true },
        {name:"Cameron Williamson", cpf:'054 074 255 87', email:'weasd@cubos.io', phone:'71 9 9462 8654', status:true },
        {name:"Sandra dos Santos", cpf:'034 365 255 87', email:'sdasd@cubos.io', phone:'71 9 9462 8654', status:true },
        {name:"Sandra dos Santos", cpf:'034 365 255 87', email:'sdasd@cubos.io', phone:'71 9 9462 8654', status:true },
    ],
    resume:[
        {tipo:'pagas', valor: 'R$ 30.000' },
        {tipo:'futuras', valor: 'R$ 7.000' },
        {tipo:'vencidas', valor: 'R$ 10.000' },
    ]
}

export default db;