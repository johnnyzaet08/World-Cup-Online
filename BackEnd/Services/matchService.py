from app import *
from ConsultsDB.matchConsults import *


@app.route('/createMatch', methods = ['POST'])
def createMatch():

    Match= createMatchDB(request)

    return Match

@app.route('/getMatchs', methods = ['GET'])
def getMatschs():
    tournament=request.json['Torneo']
    matchs=getMatchsDB(tournament)
    return matchs