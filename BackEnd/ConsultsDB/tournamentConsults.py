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
    cursor.execute('''SELECT name FROM tournament ''')
    torneos = cursor.fetchall()
    load={}
    load['Tournaments']=[]

    for torneoss in torneos:
        load['Tournaments'].append(torneoss[0])

    return load

def getFase(id):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT fase FROM fasestournament where _idTournament=%s''',[id])
    fase = cursor.fetchall()
    load={}
    load['Fases']=[]
    for faseins in fase:
       load['Fases'].append(faseins[0])
    return load

def getTeams(id):

    cursor= mysql.connection.cursor()
    cursor.execute('''SELECT team FROM teamstournament where _idTournament=%s''',[id])
    equipos = cursor.fetchall()
    load={}
    load['Teams']=[]
    for equiposOby in equipos:
       load['Teams'].append(equiposOby[0])
    
   
    return load
