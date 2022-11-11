from app import MYSQL

mysql=MYSQL

def playersFromLocal(team1,team2):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM players WHERE localTeam=%s or localTeam=%s''',[team1,team2])
    players = cursor.fetchall()
    load={}
    load['Players']=[]

    for playersIn in players:
        load['Players'].append(playersIn)

    return load

def playersFromSelec(team1,team2):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM jugador WHERE selecTeam=%s or selecTeam=%s''',[team1,team2])
    players = cursor.fetchall()
    load={}
    load['Players']=[]

    for playersIn in players:
        load['Players'].append(playersIn)

    return load