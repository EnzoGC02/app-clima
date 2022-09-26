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
 * @param {Object | undefined} ciudad
 * @param {Boolean} isHour
 * @return {String} fecha o hora formateada
 */
function getDateFormated(date, ciudad, isHour=false) {
  const local= ciudad.lang || undefined;
  const options= {};
  if (isHour) {
    options.hour= '2-digit';
    options.minute= '2-digit';
  } else {
    options.weekday= 'long';
    options.year= 'numeric';
    options.month= 'long';
    options.day= 'numeric';
  }
  if (ciudad) {
    options.timeZone=ciudad.timezone;
  }
  return date.toLocaleString(local, options);
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
export {
  getKMforHour,
  getMeterToKM,
  getDateFormated,
  getDayStringDate,
};
