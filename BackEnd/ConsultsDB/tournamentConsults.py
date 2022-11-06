from app import MYSQL

mysql=MYSQL

def createTournamentsDB(request):

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

def getTournaments():

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT Nombre FROM torneos ''')
    torneos = cursor.fetchall()
    load={}
    load['Torneos']=[]

    for torneoss in torneos:
        load['Torneos'].append(torneoss)

    return load

def getFase(name):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT Fases FROM torneos where Nombre=%s''',[name])
    fase = cursor.fetchone()
    stringFase= fase[0]
    
    return stringFase

def getTeams(name):

    cursor= mysql.connection.cursor()
    cursor.execute('''SELECT Equipos FROM torneos where Nombre=%s''',[name])
    equipos = cursor.fetchall()
    load={}
    load['Equipos']=[]
    for equiposOby in equipos:
       load['Equipos'].append(equiposOby)
    
   
    return load
