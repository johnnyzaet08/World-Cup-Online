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

    nombre= request.json['Nombre']
    fechaInicio = request.json['FechaInicio']
    fechaFinal= request.json['FechaFinal']
    tipoTorneo= request.json['Tipo']
    equipos=request.json['Equipos']
    fases=request.json['Fases']
    descripcion=request.json['Descripcion']

    createTournamentsDB(request)

    return "Done"
