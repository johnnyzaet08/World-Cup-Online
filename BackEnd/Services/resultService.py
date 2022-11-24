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

