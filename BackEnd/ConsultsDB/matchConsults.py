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
    
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM matchs WHERE _idTournament=%s''',[idTournament])
    tournament = cursor.fetchall()
    load={}
    load["Matchs"] = []
    for tournamentins in tournament:
        load["Matchs"].append(tournamentins)

    return load

def getAllMatchsDB():
    
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM matchs''')
    tournament = cursor.fetchall()
    load={}
    load["Matchs"] = []
    for tournamentins in tournament:
        load["Matchs"].append(tournamentins)

    return load
