from app import MYSQL

mysql=MYSQL


def getSelections():

    selection="Seleccion"
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT Nombre FROM equipos WHERE TIPO =%s ''',[selection])
    teams = cursor.fetchall()
    load={}
    load['ESelec']=[]
    for selecTeams in teams:
       load['ESelec'].append(selecTeams)
    
   
    return load

def getLocals():

    local="Local"
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT Nombre FROM equipos WHERE TIPO =%s ''',[local])
    teams = cursor.fetchall()
    load={}
    load['ELocal']=[]
    for localTeams in teams:
       load['ELocal'].append(localTeams)
    
   
    return load
