from app import *
from ConsultsDB.matchConsults import *


@app.route('/createMatch', methods = ['POST'])
def createMatch():

    Match= createMatchDB(request)

    return Match

@app.route('/getMatchs/<idTournament>', methods = ['GET'])
def getMatschs(idTournament):
    matchs=getMatchsDB(idTournament)
    return matchs