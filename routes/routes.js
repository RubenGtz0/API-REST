//cargue la conexion del grupo MySQL
const { response, request } = require('express');
const pool = require ('../data/config');
const res = require('express/lib/response');

// Ruta de la app
//id autoincremental
//nombre del usuario con el que se logea
//nombre completo del humano 
const router=app=>{
    // Mostrar  mensaje de bienvenida de root
    app.get('/', (request, response)); {
        response.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    }
    app.get('/users', (request, response));{
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    }

    app.get('/users/:id', (request, response)=>{
        const id=request.params.id;
        pool.query('SELECT * FROM users WHERE id=?', id, (error, result)=>{
            if(error) throw error;
            
            response.send(result);
        })
    })
}
