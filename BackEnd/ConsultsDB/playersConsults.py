from app import MYSQL

mysql=MYSQL

def playersFromLocal(team1,team2):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM players WHERE localTeam=%s or localTeam=%s''',[team1,team2])
    players = cursor.fetchall()
    load={}
    i=0

    for playersIn in players:
        load[i]=playersIn
        i=i+1

    return load

def playersFromSelec(team1,team2):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM players WHERE selecTeam=%s or selecTeam=%s''',[team1,team2])
    players = cursor.fetchall()
    load={}
    i=0
    for playersIn in players:
        load[i]=playersIn
        i=i+1
    return load