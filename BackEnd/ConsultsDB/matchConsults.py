from app import MYSQL

mysql=MYSQL

def createMatchDB(request):

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
    return "Done"

def getMatchsDB(tournament):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM partidos WHERE Fase=%s''',[tournament])
    torneos = cursor.fetchall()
    load={}
    load['Torneos']=[]

    for torneoss in torneos:
        load['Torneos'].append(torneoss)

    return load
