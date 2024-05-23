##parte del backend
import os
import pandas as pd
from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)

# Obtener la ruta completa al directorio del proyecto
base_dir = os.path.abspath(os.path.dirname(__file__))
modelo_path = os.path.join(base_dir,'..', 'src', 'assets', 'models', 'modelo_entrenado.pkl')

print("Ruta del modelo:", modelo_path)  # Agregamos esta línea para imprimir la ruta


# Cargar el modelo desde el archivo
modelo = joblib.load(modelo_path)

# Obtener todas las ciudades y tipos de gasolina presentes en los datos de entrenamiento
ciudades = ['Acapulco, Gro.','Aguascalientes, Ags.','Atlacomulco, Edo. de Méx.','Campeche, Camp.',
            'Cancún, Q. Roo.','Cd. Acuña, Coah.','Cd. Juárez, Chih.','Chetumal, Q. Roo.','Chihuahua, Chih.','Coatzacoalcos, Ver.','Colima, Col.','Cortazar, Gto.',
            'Cuernavaca, Mor.','Culiacán, Sin.','Córdoba, Ver.','Durango, Dgo.','Esperanza, Son.','Fresnillo, Zac.',
            'Guadalajara, Jal.','Hermosillo, Son.','Huatabampo, Son.','Iguala, Gro.','Izúcar de Matamoros, Pue.',
            'Jacona, Mich.','Jiménez, Chih.','La Paz, B.C.S.',
'León, Gto.',
'Matamoros, Tamps.',
'Mexicali, B.C.',
'Monclova, Coah.',
'Monterrey, N.L.',
'Morelia, Mich.',
'Mérida, Yuc.',
'Oaxaca, Oax.',
'Pachuca, Hgo.',
'Puebla, Pue.',
'Querétaro, Qro.',
'Saltillo, Coah.',
'San Andrés Tuxtla, Ver.',
'San Luis Potosí, S.L.P.',
'Tampico, Tamps.',
'Tapachula, Chis.',
'Tehuantepec, Oax.',
'Tepatitlán, Jal.',
'Tepic, Nay.',
'Tijuana, B.C.',
'Tlaxcala, Tlax.',
'Toluca, Edo. de Méx.',
'Torreón, Coah.',
'Tulancingo, Hgo.',
'Tuxtla Gutiérrez, Chis.',
'Veracruz, Ver.',
'Villahermosa, Tab.',
'Zacatecas, Zac.',
'Área Met. de la Cd. de México',]
tipos_gasolina = ['Gasolina de alto octanaje', 'Gasolina de bajo octanaje']

@app.route('/prediccion', methods=['POST'])
def predecir_precio_gasolina():
    # Obtener los datos del cuerpo de la solicitud JSON
    datos = request.json
    
    ciudad = datos['Ciudad']
    tipo_gasolina = datos['TipoGasolina']
    año_prediccion = datos['Año']
    mes_prediccion = datos['Mes']
    
    # Llamar a la función predecir_precio_gasolina con los datos extraídos
    prediccion = predecir_precio(ciudad, tipo_gasolina, año_prediccion, mes_prediccion)
    
    # Devolver la predicción como una respuesta JSON
    return jsonify({"Predicción": prediccion})

def predecir_precio(ciudad, tipo_gasolina, año_prediccion, mes_prediccion):
    # Crear un DataFrame con una sola fila que refleje las transformaciones realizadas durante el entrenamiento
    datos_prediccion = {'Año': [año_prediccion], 'Mes': [mes_prediccion]}
    for c in ciudades:
        if c == ciudad:
            datos_prediccion['Nombre ciudad_' + c] = 1
        else:
            datos_prediccion['Nombre ciudad_' + c] = 0
    for g in tipos_gasolina:
        if g == tipo_gasolina:
            datos_prediccion['Genérico_' + g] = 1
        else:
            datos_prediccion['Genérico_' + g] = 0
    
    X_prediccion = pd.DataFrame(datos_prediccion)
    
    # Hacer la predicción
    prediccion = modelo.predict(X_prediccion)
    
    # Devolver la predicción
    return prediccion[0]

if __name__ == '__main__':
    app.run(debug=True)
