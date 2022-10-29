from flask import Flask,render_template, request
from flask_mysqldb import MySQL
 
app = Flask(__name__)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'xfifa_proyecto'

mysql = MySQL(app)

#Lista
@app.route('/getEquiposLocal', methods = ['GET'])
def getEquiposLocal():
    
    local="Local"
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT Nombre FROM equipos WHERE TIPO =%s ''',[local])
    equiposL = cursor.fetchone()
    stringEquiposL= equiposL[0]
   
    return stringEquiposL
#Lista
@app.route('/getEquiposSeleccion', methods = ['GET'])
def getEquiposSeleccion():
    sele="Seleccion"
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT Nombre FROM equipos WHERE TIPO =%s ''',[sele])
    equiposS = cursor.fetchone()
    stringEquiposS= equiposS[0]
    
   
    return stringEquiposS

#Aun no
@app.route('/getJugadoresLocal', methods = ['GET'])
def getJugadoresLocal():
    id_equipo = request.json['EquipoLocal']
    return ""
#Aun no
@app.route('/getJugadoresSeleccion', methods = ['GET'])
def getJugadoresSeleccion():
    id_equipo = request.json['EquipoSeleccion']
    return ""

#Lista
@app.route('/getTorneos', methods = ['GET'])
def getTorneos():

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT Nombre FROM torneos ''')
    torneos = cursor.fetchone()
    stringTorneos= torneos[0]
   
    return stringTorneos

#Aun no
@app.route('/getPartidos', methods = ['GET'])
def getPartidos():
    return ""

#Lista
@app.route('/getFaseTorneo', methods = ['GET'])
def getFaseTorneo():

    nombre=request.json['Nombre']
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT Fases FROM torneos where Nombre=%s''',[nombre])
    fase = cursor.fetchone()
    stringFase= fase[0]
   
    return stringFase

#Lista
@app.route('/getEquiposTorneo', methods = ['GET'])
def getEquiposTorneo():

    nombre=request.json['Nombre']
    cursor= mysql.connection.cursor()
    cursor.execute('''SELECT Equipos FROM torneos where Nombre=%s''',[nombre])
    equipos = cursor.fetchone()
    stringEquipos= equipos[0]

    return stringEquipos
#Lista

@app.route('/createTorneos', methods = ['POST'])
def createTorneos():
    nombre= request.json['Nombre']
    fechaInicio = request.json['FechaInicio']
    fechaFinal= request.json['FechaFinal']
    tipoTorneo= request.json['Tipo']
    equipos=request.json['Equipos']
    fases=request.json['Fases']
    descripcion=request.json['Descripcion']

    cursor= mysql.connection.cursor()
    
    cursor.execute('''INSERT INTO torneos VALUES(%s,%s,%s,%s,%s,%s,%s)''',(nombre,fechaInicio,fechaFinal,tipoTorneo,equipos,fases,descripcion))
    mysql.connection.commit()
    cursor.close()
    
    return "Done"
#Lista
@app.route('/createPartidos', methods = ['POST'])
def createPartidos():

    fecha = request.json['Fecha']
    horaInicio= request.json['Hora']
    torneo= request.json['Torneo']
    fase=request.json['Fase']
    equipo1=request.json['Equipo1']
    equipo2=request.json['Equipo2']
    sede=request.json['Sede']
    
    cursor= mysql.connection.cursor()
    cursor.execute('''INSERT INTO partidos VALUES(%s,%s,%s,%s,%s,%s,%s)''',(fecha,horaInicio,torneo,fase,equipo1,equipo2,sede))
    
    #Saving the Actions performed on the DB
    mysql.connection.commit()
    #Closing the cursor
    cursor.close()

    return "done"

app.run(host='localhost', port=5000, debug=True)