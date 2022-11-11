from app import MYSQL

mysql=MYSQL

def createTournamentsDB(request):

    _id= request.json['_id']
    name = request.json['name']
    startDate = request.json['startDate']
    endDate= request.json['endDate']
    description= request.json['description']
    teams=request.json['teams']
    fases=request.json['fases']

    cursor= mysql.connection.cursor()
    cursor.execute('''INSERT INTO tournament VALUES(%s,%s,%s,%s,%s)''',(_id,name,startDate,endDate,description))
    mysql.connection.commit()
    cursor.close()
    x=2
    for teamsinsert in teams:
        print(teamsinsert)
        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO teamstournament VALUES(%s,%s)''',(_id,teamsinsert))
        mysql.connection.commit()
        cursor.close()

    for fasesinsert in fases:
        print(fasesinsert)
        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO fasestournament VALUES(%s,%s)''',(_id,fasesinsert))
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
