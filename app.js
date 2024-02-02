const horaElemento = document.querySelector('.hora');
const minutoElemento = document.querySelector('.minuto');
const segundoElemento = document.querySelector('.segundo');
const tiempoElemento = document.querySelector('.tiempo');
const diaElemento = document.querySelector('.dia');
const toggle = document.querySelector('.toggle');

const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const normalizeNumber = (number) => {
    return number.toLocaleString('en-ES', { minimumIntegerDigits: 2, useGrouping: false })
}

toggle.addEventListener('click', (e) => {
    const html =document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggle.innerHTML = 'Modo Oscuro';
    }else{
        html.classList.add('dark');
        toggle.innerHTML = 'Modo Claro';
    }
})

function setTime() {
    const time = new Date();
    const mes = time.getMonth();
    const dia = time.getDay();
    const fecha = time.getDate();
    const hora = time.getHours();
    const horasPorReloj = hora >= 13 ? hora - 12 : hora;
    const minutos = time.getMinutes();
    const segundos = time.getSeconds();
    const ampm = hora >= 12 ? 'PM' : 'AM';

    horaElemento.style.transform = `translate(-50%, -100%) rotate(${horasPorReloj * 30}deg)`;
    minutoElemento.style.transform = `translate(-50%, -100%) rotate(${minutos * 6}deg)`;
    segundoElemento.style.transform = `translate(-50%, -100%) rotate(${segundos * 6}deg)`;

    tiempoElemento.innerHTML = `${ normalizeNumber(horasPorReloj) }:${ minutos < 10 ? `0${ minutos }` : minutos }:${ normalizeNumber(segundos) } ${ ampm }`
    diaElemento.innerHTML = `${ dias[ dia ] }, ${ meses[ mes ] } <span class="circle">${ fecha }</span>`
}


const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

setTime()


setInterval(setTime, 1000)


/* 
Explicacion
normalizeNumber: Esta es una función que toma un número como argumento y lo convierte a una cadena de texto con formato local. En este caso, se está utilizando el formato 'en-ES' (inglés de España) y se especifica que el número mínimo de dígitos enteros debe ser 2. Si el número es menor a 10, se añade un 0 al principio. La opción useGrouping: false evita que se agrupen los dígitos en miles.

toggle.addEventListener: Aquí se está añadiendo un evento de click al elemento toggle. Cuando se hace click en este elemento, se ejecuta la función que sigue. Esta función verifica si el elemento html tiene la clase 'dark'. Si la tiene, la elimina y cambia el texto del botón a 'Modo Oscuro'. Si no la tiene, la añade y cambia el texto del botón a 'Modo Claro'. Esto se utiliza para cambiar entre un tema claro y oscuro en la página.

setTime: Esta es una función que se utiliza para obtener la hora actual y actualizar los elementos de la página con esta información. Primero, se obtiene la fecha y hora actuales con new Date(). Luego, se extraen el mes, el día, la fecha, la hora, los minutos y los segundos de este objeto. Se calcula la hora en formato de 12 horas y si es AM o PM. Luego, se actualizan las transformaciones de los elementos horaElemento, minutoElemento y segundoElemento para rotarlos en función de la hora, los minutos y los segundos actuales. Finalmente, se actualiza el contenido de los elementos tiempoElemento y diaElemento con la hora y la fecha actuales.


scale: Esta es una función que realiza una escala lineal de un número de un rango de entrada a un rango de salida. Toma cinco argumentos: el número a escalar (num), el mínimo y el máximo del rango de entrada (inMin e inMax), y el mínimo y el máximo del rango de salida (outMin y outMax). La fórmula que se utiliza para hacer la escala es una fórmula estándar para escalar un número de un rango a otro.

setTime(): Esta línea llama a la función setTim, setTime es una función que obtiene la hora actual y actualiza los elementos de la página con esta información.

setInterval(setTime, 1000): Esta línea llama a la función setInterval, que toma dos argumentos: una función para ejecutar y un intervalo de tiempo en milisegundos. setInterval ejecuta la función proporcionada repetidamente, esperando el intervalo de tiempo especificado entre cada ejecución. En este caso, setTime se ejecutará cada 1000 milisegundos (o cada segundo). Esto se utiliza para actualizar la hora en la página cada segundo.

*/