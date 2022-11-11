from app import *
from ConsultsDB.poolConsults import *

"""

Service complete

"""
@app.route('/createPools', methods = ['POST'])
def createPools():

    createPoolDB(request)


    return "Done"

"""

Service complete

"""
@app.route('/getPools', methods = ['GET'])
def getPools():

    response=getPoolDB()


    return response