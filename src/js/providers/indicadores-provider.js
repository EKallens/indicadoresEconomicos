
const urlIndicadores = 'https://mindicador.cl/api';

const obtenerIndicadores = async() => {

    const response = await fetch( urlIndicadores );
    return await response.json();
}

export{
    obtenerIndicadores
}