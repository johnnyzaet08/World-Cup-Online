from app import *
from ConsultsDB.usersConsults import *

"""

Service complete

"""
@app.route('/createUser', methods = ['POST'])
def createUser():

    username= request.json['Username']
    email = request.json['Email']
    password= request.json['Password']
    firstname= request.json['Firstname']
    lastname=request.json['Lastname']
    country=request.json['Country']
    birthday=request.json['Birthday']
    isAdmin=request.json['isAdmin']

    createUserDB(request)

    return "Done"

"""

Service complete

"""
@app.route('/getUserLogin/<username>,<password>', methods = ['GET'])
def getUserLogin(username, password):

    user=getUserLoginDBUser(username)
    passw=getUserLoginDBPass(password)
    
    if passw and user:
        load = "Encontrado"
    elif user:
        load="Contraseña incorrecta"
    else:
        load ="Usuario no encontrado"

    return load