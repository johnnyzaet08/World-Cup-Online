from app import *
from ConsultsDB.playersConsults import *



@app.route('/getPlayersMatch/<type>,<team1>,<team2>', methods = ['GET'])
def getPlayersMatch(type,team1,team2):
    
    if type=="EquipoLocal":
        playersMatch = playersFromLocal(team1,team2)
    elif type=="EquipoSeleccion":
        playersMatch = playersFromSelec(team1,team2)
    else:playersMatch="Error"
    return playersMatch

