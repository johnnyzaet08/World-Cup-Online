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

    for goalInsertA in goalA:

        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO goalsplayerpool VALUES(%s,%s,%s,%s)''',("1",_id, goalInsertA, "teamA"))
        mysql.connection.commit()
        cursor.close()

    for goalInsertB in goalB:

        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO goalsplayerpool VALUES(%s,%s,%s,%s)''',("2",_id, goalInsertB,"teamB"))
        mysql.connection.commit()
        cursor.close()

    for assitInsertA in assistA:

        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO assistplayerpool VALUES(%s,%s,%s,%s)''',("3",_id , assitInsertA,"teamA"))
        mysql.connection.commit()
        cursor.close()

    for assitInsertB in assistB:

        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO assistplayerpool VALUES(%s,%s,%s,%s)''',("4",_id , assitInsertB,"teamB"))
        mysql.connection.commit()
        cursor.close()

    return "Done"

def getPoolDB():

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM footballpools''')
    pools = cursor.fetchall()

    return pools