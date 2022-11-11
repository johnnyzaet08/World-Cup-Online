from app import *
from ConsultsDB.tournamentConsults import *


"""

Service complete

"""
@app.route('/getTournament', methods = ['GET'])
def getTournament():

    Tournaments = getTournaments()
    return Tournaments


"""

Service complete

"""
@app.route('/getFaseTournament', methods = ['GET'])
def getFaseTournament():

    name=request.json['Nombre']
    Fase = getFase(name)
    return Fase
    

"""

Service complete

"""
@app.route('/getTeamsTournament', methods = ['GET'])
def getTeamsTournament():

    name=request.json['Nombre']
    Teams = getTeams(name)
    return Teams


"""

Service complete

"""
@app.route('/createTournaments', methods = ['POST'])
def createTournaments():

    _id= request.json['_id']
    name = request.json['name']
    startDate = request.json['startDate']
    endDate= request.json['endDate']
    description= request.json['description']
    teams=request.json['teams']
    fases=request.json['fases']
    createTournamentsDB(request)

    return "Done"
