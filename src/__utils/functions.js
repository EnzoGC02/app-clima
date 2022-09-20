/**
 *@param {number} meter a convertir
 @return {number} meter/1000
 */
function getMeterToKM(meter) {
  return meter/1000;
}

/**
 * Convierte unidad de m/s a km/h
 * Formula estandar [KH = (metrosPorSegundo/1000) * 3600]
 * @param {number} metersForSecond
 * @return {number} metersForSecond convertido a KM/H
 */
function getKMforHour(metersForSecond) {
  const KMforHour= getMeterToKM(metersForSecond)*3600;
  return KMforHour;
}

/**
 * @param {Date} date
 * @return {String} fecha formateada la forma local de visualizacion
 */
function getDateFormated(date) {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return date.toLocaleDateString(undefined, options);
}
/**
 * @param {Date} date
 * @return {String} nombre del dia de date
 */
function getDayStringDate(date) {
  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const numeroDia = date.getDay();
  const nombreDia = dias[numeroDia];

  return nombreDia;
}
/**
 * @param {Date} date
 * @return {String} hora actual en formato HH:mm
 */
function getHourCurrent(date) {
  return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}
export {
  getKMforHour,
  getMeterToKM,
  getDateFormated,
  getDayStringDate,
  getHourCurrent,
};
