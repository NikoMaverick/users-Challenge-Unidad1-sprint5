

const users = document.getElementById("listaUsuarios")   // Capturo el html para pasar los datos de los usuarios


    const page = fetch(`https://jsonplaceholder.typicode.com/users`) //Me traigo los datos de la Api
        page.then(response => response.json())
        .then(data => {
            const alumns = data
           
            alumns.forEach(alumns => {     // Crear el HTML dentro del bucle
               const template = `
               <li>
                <img src=${alumns.id} alt=${alumns.name}/>
                <h2><span>Nombre: </span>${alumns.name}</h2>
                <p><span>Edad: </span>${alumns.age}</p>
                <p><span>Apellido: </span>${alumns.username}</p>
                <p><span>Telefono: </span>${alumns.phone}</p>
                <p><span>Email: </span>${alumns.email}</p>
                <p><span>Calle: </span>${[alumns.address.street]}</p>
                <p><span>Número: </span>${alumns.address.suite}</p>
                <p><span>Ciudad: </span>${alumns.address.city}</p>
                </li>
               `
               users.innerHTML = template
            })
        })

            