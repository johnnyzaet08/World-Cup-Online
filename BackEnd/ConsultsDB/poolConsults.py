from app import MYSQL

mysql=MYSQL

def createPoolDB(request):

    _idPool= request.json['_id']
    _idPartido = request.json['matchID']
    winner = request.json['winner']
    teamAScore= request.json['teamAScore']
    teamBScore= request.json['teamBScore']
    mvpGame=request.json['MVP']
    _idGoalsPlayer=request.json['_idGoalsPlayer']
    _idAssistPlayer=request.json['_idAssistPlayer']
    goalA=request.json['goalA']
    goalB=request.json['goalB']
    assistA=request.json['assistA']
    assistB=request.json['assistB']

    cursor= mysql.connection.cursor()
    cursor.execute('''INSERT INTO footballpools VALUES(%s,%s,%s,%s,%s,%s)''',(_idPool,_idPartido,winner,mvpGame,teamAScore,teamBScore))
    mysql.connection.commit()
    cursor.close()

    i = 0
    for goalInsertA in goalA:

        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO goalsplayerpool VALUES(%s,%s,%s,%s)''',(_idGoalsPlayer[i],_idPool, goalInsertA, "teamA"))
        mysql.connection.commit()
        cursor.close()
        i+=1

    for goalInsertB in goalB:

        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO goalsplayerpool VALUES(%s,%s,%s,%s)''',(_idGoalsPlayer[i],_idPool, goalInsertB,"teamB"))
        mysql.connection.commit()
        cursor.close()
        i+=1

    j = 0
    for assitInsertA in assistA:

        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO assistplayerpool VALUES(%s,%s,%s,%s)''',(_idAssistPlayer[j],_idPool , assitInsertA,"teamA"))
        mysql.connection.commit()
        cursor.close()
        j+=1

    for assitInsertB in assistB:

        cursor= mysql.connection.cursor()
        cursor.execute('''INSERT INTO assistplayerpool VALUES(%s,%s,%s,%s)''',(_idAssistPlayer[j],_idPool , assitInsertB,"teamB"))
        mysql.connection.commit()
        cursor.close()
        j+=1

    return "Done"

def getPoolDB():

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM footballpools''')
    pools = cursor.fetchall()

    load={}
    load['Pools']=[]

    for pool in pools:
        load['Pools'].append(pool[0])
    
    return load

def getGoalPoolDB():

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM goalsplayerpool''')
    pools = cursor.fetchall()
    print(pools)

    load={}
    load['GoalsPools']=[]

    for pool in pools:
        load['GoalsPools'].append(pool[0])

    return load

def getAssistPoolDB():

    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM assistplayerpool''')
    pools = cursor.fetchall()

    load={}
    load['AssistPools']=[]

    for pool in pools:
        load['AssistPools'].append(pool[0])

    return load