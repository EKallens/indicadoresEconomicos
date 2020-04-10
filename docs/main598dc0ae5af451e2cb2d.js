(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(){},function(a,b,c){'use strict';c.r(b);const d=async()=>{const a=await fetch('https://mindicador.cl/api');return await a.json()},e=document.body;let f;window.moment&&moment.locale('es');const g=()=>{const a=`
    <div class="row">
        <div class="col-md-12">
            <h2>Indicadores económicos</h2>
            <hr>
            <p>Lista de indicadores diarios</p>
            <div id="divIndicadores">
            </div>
        </div>
    </div>
    `,b=document.createElement('div');b.innerHTML=a,b.classList.add('container'),b.classList.add('mt-5'),e.append(b),f=document.querySelector('#divIndicadores')},h=()=>{d().then((a)=>{let b,c,d,e='';for(let[f,g]of Object.entries(a)){switch(g.unidad_medida){case'Pesos':b='(CLP)',c='$';break;case'D\xF3lar':b='(USD)',c='$';break;default:b='%',c='';}g.nombre&&(d=g.fecha.split('T')[0].split('-').reverse().join('-'),e+=`
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header">${g.nombre}</div>
                    <div class="card-body">
                    <p class="card-text"><b>Valor: </b>${c}${g.valor} ${b}</p>
                    <p class="card-text"><b>Fecha: </b>${d}</p>
                    </div>
                </div>
                `)}f.innerHTML=e})};c(0);(()=>{g(),h()})()}]);