// Arreglo de clientes con sus respectivos detalles y servicios
const clients = [
    {
        id: 1,
        name: "Eulalia",
        lastname: "Fernández",
        age: 30,
        services: [
            {
                name: "Internet",
                status: true
            },
            {
                name: "Telefonía",
                status: false
            }
        ]
    },
    {
        id: 2,
        name: "Rigoberto",
        lastname: "García",
        age: 25,
        services: [
            {
                name: "Televisión",
                status: true
            },
            {
                name: "Internet",
                status: true
            }
        ]
    },
    {
        id: 3,
        name: "Isidora",
        lastname: "Hernández",
        age: 40,
        services: [
            {
                name: "Internet",
                status: false
            },
            {
                name: "Móvil",
                status: true
            }
        ]
    },
    {
        id: 4,
        name: "Guillermo",
        lastname: "Martínez",
        age: 35,
        services: [
            {
                name: "Internet",
                status: true
            },
            {
                name: "Telefonía",
                status: true
            }
        ]
    },
    {
        id: 5,
        name: "Basilio",
        lastname: "López",
        age: 28,
        services: [
            {
                name: "Móvil",
                status: false
            },
            {
                name: "Televisión",
                status: true
            }
        ]
    }
];

// Función para mostrar los servicios de un cliente
function displayClientServices(client) {
    // Muestra el nombre completo del cliente
    console.log(`Cliente ${client.name} ${client.lastname}:`);
    // Recorre cada servicio del cliente
    client.services.forEach(service => {
        // Determina si el servicio está activo o inactivo
        const status = service.status ? 'Activo' : 'Inactivo';
        // Muestra el estado del servicio
        console.log(`- Su servicio ${service.name} está ${status}.`);
    });
}

// Recorre cada cliente en el arreglo de clientes
clients.forEach(displayClientServices);

