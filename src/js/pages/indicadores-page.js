import { obtenerIndicadores } from '../providers/indicadores-provider';
import moment from 'moment';

const body = document.body;
let divIndicadores;

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
        moment.locale('es');
        let html = '';
        let unidadMedida, icono;
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
                html += `
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">${value.nombre}</div>
                    <div class="card-body">
                    <p class="card-text"><b>Valor: </b>${icono}${value.valor} ${unidadMedida}</p>
                    <p class="card-text"><b>Fecha: </b>${ moment(value.fecha).format('L')}</p>
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