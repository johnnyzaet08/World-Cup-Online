from app import MYSQL

mysql=MYSQL

def createMatchDB(request):

    _id = request.json['_id']
    data= request.json['data']
    time= request.json['time']
    fase=request.json['fase']
    team1=request.json['team1']
    team2=request.json['team2']
    place=request.json['place']
    _idTournament=request.json['_idTournament']
    
    
    cursor= mysql.connection.cursor()
    cursor.execute('''INSERT INTO matchs VALUES(%s,%s,%s,%s,%s,%s,%s)''',(_id,data,time,fase,fase,team1,team2,place,_idTournament))   
    mysql.connection.commit()
    cursor.close()
    return "Done"

def getMatchsDB(idTournament):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM partidos WHERE _idTournament=%s''',[idTournament])
    tournament = cursor.fetchall()
    load={}
    load['Tournament']=[]

    for tournamentins in tournament:
        load['Tournament'].append(tournamentins)

    return load
