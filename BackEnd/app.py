from flask import Flask,render_template, request
from flask_mysqldb import MySQL
 
app = Flask(__name__)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask'

mysql = MySQL(app)

@app.route('/getEquiposLocal', methods = ['GET'])
def getEquipos():
    #obtener todos los equipos
    return ""
@app.route('/getEquiposSeleccion', methods = ['GET'])
def getEquipos():
    #obtener todos los equipos
    return ""

#Aun no
@app.route('/getJugadoresLocal', methods = ['GET'])
def getJugadores():
    id_equipo = request.json['EquipoLocal']
    return ""
#Aun no
@app.route('/getJugadoresSeleccion', methods = ['GET'])
def getJugadores():
    id_equipo = request.json['EquipoSeleccion']
    return ""

@app.route('/getTorneos', methods = ['GET'])
def getTorneos():
    return ""

#Aun no
@app.route('/getPartidos', methods = ['GET'])
def getPartidos():
    return ""

@app.route('/getFaseTorneo', methods = ['GET'])
def getFaseTorneo():
    return ""

@app.route('/getEquiposTorneo', methods = ['GET'])
def getEquiposTorneo():
    return ""

@app.route('/createTorneos', methods = ['POST'])
def createTorneos():
    nombre= request.json['Nombre']
    fechaInicio = request.json['FechaInicio']
    fechaFinal= request.json['FechaFinal']
    tipoTorneo= request.json['Tipo']
    equipos=request.json['Equipos']
    fases=request.json['Fases']
    descripcion=request.json['Descripcion']
    return ""

@app.route('/createPartidos', methods = ['POST'])
def createPartidos():

    fecha = request.json['Fecha']
    horaInicio= request.json['Hora']
    torneo= request.json['Torneo']
    fase=request.json['Fase']
    equipo1=request.json['Equipo1']
    equipo2=request.json['Equipo2']
    sede=request.json['Sede']

    return ""

if __name__ == "__main__":
    app.run(host='localhost', port=5000)