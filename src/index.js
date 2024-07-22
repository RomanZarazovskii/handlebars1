import countries from "./data";
import countriesTemplates from "./templates/countries.hbs";
const compile = countriesTemplates({ countries });
document.getElementById('countriesHTML').innerHTML = compile;