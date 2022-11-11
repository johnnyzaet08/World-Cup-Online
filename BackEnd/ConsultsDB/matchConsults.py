from app import MYSQL

mysql=MYSQL

"""

Service Complete

"""
def createMatchDB(request):

    _id = request.json['_id']
    date= request.json['date']
    time= request.json['time']
    fase=request.json['fase']
    team1=request.json['team1']
    team2=request.json['team2']
    place=request.json['place']
    _idTournament=request.json['_idTournament']
    
    
    cursor= mysql.connection.cursor()
    cursor.execute('''INSERT INTO matchs VALUES(%s,%s,%s,%s,%s,%s,%s,%s)''',(_id,date,time,fase,team1,team2,place,_idTournament))   
    mysql.connection.commit()
    cursor.close()
    return "Done"

def getMatchsDB(idTournament):
    
    print(idTournament)
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM matchs WHERE _idTournament=%s''',[str(idTournament)])
    tournament = cursor.fetchall()
    print(tournament)
    load={}
    i=0
    for tournamentins in tournament:
        load[i]=tournamentins
        i=i+1

    return load
