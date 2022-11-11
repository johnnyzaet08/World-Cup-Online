from app import MYSQL

mysql=MYSQL


def getSelections():

    selection="Selection"
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT name FROM teams WHERE tyepe =%s ''',[selection])
    teams = cursor.fetchall()
    load={}
    load['TSelec']=[]
    for selecTeams in teams:
       load['TSelec'].append(selecTeams)
    
   
    return load

def getLocals():

    local="Local"
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT name FROM equipos WHERE type =%s ''',[local])
    teams = cursor.fetchall()
    load={}
    load['ELocal']=[]
    for localTeams in teams:
       load['ELocal'].append(localTeams)
    
   
    return load
