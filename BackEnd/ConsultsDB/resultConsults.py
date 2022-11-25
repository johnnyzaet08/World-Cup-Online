from app import MYSQL

mysql=MYSQL

def createResultDB(request):
    _idPartido = request.json['matchID']
    winner = request.json['winner']
    teamAScore= request.json['teamAScore']
    teamBScore= request.json['teamBScore']
    mvpGame=request.json['MVP']
    goalA=request.json['goalA']
    goalB=request.json['goalB']
    assistA=request.json['assistA']
    assistB=request.json['assistB']
    _id='[value-1]'
    _idTournament=''

    cursor= mysql.connection.cursor()

    cursor.execute('''SELECT _idTorunament from matchs WHERE _id=%s''',[_idPartido])
    idtor=cursor.fetchone()

    cursor.execute('''INSERT INTO footballresults VALUES(%s,%s,%s,%s,%s,%s)''',(_id,_idPartido,winner,mvpGame,teamAScore,teamBScore))
    mysql.connection.commit()
    
    for id in idtor:
        _idTournament=id

    i = 0
    for goalInsertA in goalA:

        
        cursor.execute('''INSERT INTO goalsadminpool VALUES(%s,%s,%s,%s)''',(_id,_idPartido, goalInsertA, "teamA"))
        mysql.connection.commit()
        
        i+=1

    for goalInsertB in goalB:

     
        cursor.execute('''INSERT INTO goalsadminpool VALUES(%s,%s,%s,%s)''',(_id,_idPartido, goalInsertB,"teamB"))
        mysql.connection.commit()
        
        i+=1

    j = 0
    for assitInsertA in assistA:

       
        cursor.execute('''INSERT INTO assistadminpool VALUES(%s,%s,%s,%s)''',(_id,_idPartido , assitInsertA,"teamA"))
        mysql.connection.commit()
       
        j+=1

    for assitInsertB in assistB:

        
        cursor.execute('''INSERT INTO assistadminpool VALUES(%s,%s,%s,%s)''',(_id,_idPartido , assitInsertB,"teamB"))
        mysql.connection.commit()
        
        j+=1

    cursor.close()
    print(_idTournament)

    insertPointsDB(_idPartido,_idTournament)
    return "Done"

def insertPointsDB(_idPartido,_idTournament):
    _idLiga="1"
    cursor= mysql.connection.cursor() 

    cursor.execute('''SELECT username FROM footballpools WHERE _idPartido=%s''',[_idPartido])
    select=cursor.fetchall()
    print(select)

    for index in select:
        points=0
        cursor.execute('''SELECT footballpools.username AS username FROM footballpools INNER JOIN footballresults ON footballpools._idPartido = footballresults._idPartido &&
        footballpools.username = %s && footballpools.winner = footballresults.winner''',[index])
        teams = cursor.fetchone()

        if(teams):
            points=points+10

        cursor.execute('''SELECT footballpools.username AS username FROM footballpools INNER JOIN footballresults ON footballpools._idPartido = footballresults._idPartido && 
        footballpools.username = %s && footballpools.mvpGame = footballresults.mvpGame''',[index])
        teams2 = cursor.fetchone()

        if(teams2):
            points=points+10

        cursor.execute('''SELECT footballpools.username AS username FROM footballpools INNER JOIN footballresults ON footballpools._idPartido = footballresults._idPartido && 
        footballpools.username = %s && footballpools.teamAScore = footballresults.teamAScore''',[index])
        teams3 = cursor.fetchone()

        cursor.execute('''SELECT footballpools.username AS username FROM footballpools INNER JOIN footballresults ON footballpools._idPartido = footballresults._idPartido && 
        footballpools.username = %s && footballpools.teamBScore = footballresults.teamBScore''',[index])
        teams4 = cursor.fetchone()

        if(teams4 and teams3):
            points=points+10
        
        cursor.execute('''SELECT pts FROM results WHERE  _idTournament=%s && username=%s ''',[_idTournament,index])
        found = cursor.fetchone()
        print(found)

        if(found):
            for pt in found:
                cursor.execute('''UPDATE results SET pts=%s WHERE username=%s && _idTournament=%s''',[pt+points,index,_idTournament])
                mysql.connection.commit()
        else:
            print(select)
            for indexPost in select:
                print(indexPost)
                _id='[value-1]'
                cursor.execute('''INSERT INTO results VALUES(%s,%s,%s,%s,%s)''',(_id,_idTournament,_idLiga,indexPost,points))
                mysql.connection.commit()
    cursor.close()
    return select

def setLigaDB(request):
    _idTournament=request.json['_idTournament']
    username=request.json['username']
    _idLiga=request.json['_idLiga']

    cursor= mysql.connection.cursor()
    cursor.execute('''UPDATE results SET _idLiga=%s WHERE username=%s && _idTournament=%s''',[_idLiga,username,_idTournament])
    mysql.connection.commit()
    return "Done"

def getLigaDB(username,_idTournament):

    cursor= mysql.connection.cursor()
    cursor.execute('''SELECT _idLiga FROM results WHERE username=%s && _idTournament=%s''',[username,_idTournament])
    found = cursor.fetchone()

    return found

def getRankingDB(username,_idTournament):

    cursor= mysql.connection.cursor()
    cursor.execute('''SELECT username,pts FROM results WHERE _idTournament =%s ORDER BY pts DESC''',[_idTournament])
    found= cursor.fetchall()

    load={}
    load['Ranking Global']=[]

    for pool in found:
        load['Ranking Global'].append(pool)
    position=0
    for index in load['Ranking Global']:
        
        if(index[0]==username):
            load['UserPosition']=(position+1)
        else:
            position=position+1
        

    
    cursor.close()
    return load

def getRankingPrivateDB(username,_idTournament,_idLiga):

    cursor= mysql.connection.cursor()
    cursor.execute('''SELECT username,pts FROM results WHERE _idTournament =%s && _idLiga=%s ORDER BY pts DESC''',[_idTournament,_idLiga])
    found= cursor.fetchall()

    load={}
    load['Ranking Privado']=[]

    for pool in found:
        load['Ranking Privado'].append(pool)
    position=0
    for index in load['Ranking Privado']:
        
        if(index[0]==username):
            load['UserPosition']=(position+1)
        else:
            position=position+1
        

    
    cursor.close()
    return load