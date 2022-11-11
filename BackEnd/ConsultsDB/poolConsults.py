from app import MYSQL

mysql=MYSQL

def createPoolDB(request):

    _id= "1"
    _idPartido = request.json['matchID']
    winner = request.json['winner']
    teamAScore= request.json['teamAScore']
    teamBScore= request.json['teamBScore']
    mvpGame=request.json['MVP']
    goalA=request.json['goalA']
    goalB=request.json['goalB']
    assistA=request.json['assistA']
    assistB=request.json['assistA']

    cursor= mysql.connection.cursor()
    cursor.execute('''INSERT INTO footballpools VALUES(%s,%s,%s,%s,%s,%s)''',(_id,_idPartido,winner,mvpGame,teamAScore,teamBScore))
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

def getPoolDB():

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM footballpools''')
    pools = cursor.fetchall()

    return pools