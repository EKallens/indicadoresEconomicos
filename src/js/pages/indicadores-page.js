import { obtenerIndicadores } from '../providers/indicadores-provider';

const body = document.body;
let divIndicadores;

if (window.moment) { 
    moment.locale('es');
}

const crearHtml = () => {

    const html = `
    <div class="row">
        <div class="col-md-12">
            <h2>Indicadores económicos</h2>
            <hr>
            <p>Lista de indicadores diarios</p>
            <div id="divIndicadores">
            </div>
        </div>
    </div>
    `;

    const contenedor = document.createElement('div');
    contenedor.innerHTML = html;
    contenedor.classList.add('container');
    contenedor.classList.add('mt-5');
    body.append(contenedor);
    divIndicadores = document.querySelector('#divIndicadores');

}

const crearHtmlIndicador = () => {

    obtenerIndicadores().then( (resp)=>{
        let html = '';
        let unidadMedida, icono, fechaFinal;
        for (let [key, value] of Object.entries(resp)) {

            switch (value.unidad_medida){
                case 'Pesos': unidadMedida = '(CLP)', icono = '$'
                    break;
                case 'Dólar': unidadMedida = '(USD)', icono = '$'
                    break;
                default: unidadMedida = '%', icono = ''
                break;
            }
            if(value.nombre){

                fechaFinal = value.fecha.split('T')[0].split('-').reverse().join('-');  

                html += `
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">${value.nombre}</div>
                    <div class="card-body">
                    <p class="card-text"><b>Valor: </b>${icono}${value.valor} ${unidadMedida}</p>
                    <p class="card-text"><b>Fecha: </b>${ fechaFinal }</p>
                    </div>
                </div>
                `;
            }
        }

        divIndicadores.innerHTML = html;
    });

}

const init = () => {
    crearHtml();
    crearHtmlIndicador();
}

export{
    init
}