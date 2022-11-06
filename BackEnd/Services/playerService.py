from app import *
from ConsultsDB.playersConsults import *



@app.route('/getPlayersMatch', methods = ['GET'])
def getPlayersMatch():
    type=request.json['Tipo']
    team1 = request.json['Equipo1']
    team2 = request.json['Equipo2']
    if type=="EquipoLocal":
        playersMatch = playersFromLocal(team1,team2)
    elif type=="EquipoSeleccion":
        playersMatch = playersFromSelec(team1,team2)
    else:playersMatch="Error"
    return playersMatch

