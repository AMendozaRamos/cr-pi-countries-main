const validation = (activity) => {
    const { countryName , name, difficulty, duration, season } = activity;

    let errors = {}
    
    if (countryName>=0 ||countryName<=0 || countryName.length===0) {
        errors.countryName = 'Tiene que escribir el nombre de un pais';
    }

    if (name>=0 ||name<=0 || name.length===0) {
        errors.name = 'Tiene que escrbir una actividad';
    }

    if (
        difficulty != 1 &&
        difficulty != 2 &&
        difficulty != 3 &&
        difficulty != 4 &&
        difficulty != 5 

      ) {
        errors.difficulty = 'Tiene que escribir un número entero entre 1 y 5';
      }
      
    

    if (duration !== null) {
        if (typeof duration !== 'number' && isNaN(parseFloat(duration))) {
            errors.duration = 'Tiene que escribir una cantidad entera de horas';
        }
    }

    if (
        season !== 'Verano' &&
        season !== 'Otoño' &&
        season !== 'Invierno' &&
        season !== 'Primavera'
    ) {
        errors.season = 'Tiene que escribir una estación (Verano, Otoño, Invierno o Primavera)';
    }

    return errors;

}

export default validation