from app import MYSQL

mysql=MYSQL

def playersFromLocal(team1,team2):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM jugador WHERE EquipoLocal=%s or EquipoLocal=%s''',[team1,team2])
    players = cursor.fetchall()
    load={}
    load['Players']=[]

    for playersIn in players:
        load['Players'].append(playersIn)

    return load

def playersFromSelec(team1,team2):

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM jugador WHERE EquipoSeleccion=%s or EquipoSeleccion=%s''',[team1,team2])
    players = cursor.fetchall()
    load={}
    load['Players']=[]

    for playersIn in players:
        load['Players'].append(playersIn)

    return load