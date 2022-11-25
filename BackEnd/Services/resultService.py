from app import *
from ConsultsDB.resultConsults import *

"""

Service complete

"""
@app.route('/postResultsAdmin', methods = ['POST'])
def createResult():

    createResultDB(request)


    return "Done"

"""

Service complete

"""
@app.route('/insertPoints', methods = ['GET'])
def insertPoints():

    insertPointsDB()


    return "Done"
"""

Service complete

"""
@app.route('/setLiga', methods = ['PUT'])
def setLiga():

    setLigaDB(request)

    return "Done"

"""

Service complete

"""
@app.route('/getLiga/<username>,<_idTournament>', methods = ['GET'])
def getLiga(username,_idTournament):

    response=getLigaDB(username,_idTournament)
    userLiga={}
    if response:
        for id in response:
            userLiga['idLiga']=id

    return userLiga

"""

Service complete

"""
@app.route('/getRanking/<username>,<_idTournament>', methods = ['GET'])
def getRanking(username,_idTournament):

    response=getRankingDB(username,_idTournament)
    

    return response

"""

Service complete

"""
@app.route('/getRankingPrivate/<username>,<_idTournament>,<_idLiga>', methods = ['GET'])
def getRankingPrivate(username,_idTournament,_idLiga):

    response=getRankingPrivateDB(username,_idTournament,_idLiga)
    

    return response