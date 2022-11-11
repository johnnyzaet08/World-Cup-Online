from app import MYSQL

mysql=MYSQL

def createUserDB(request):

    username= request.json['Username']
    email = request.json['Email']
    password= request.json['Password']
    firstname= request.json['Firstname']
    lastname=request.json['Lastname']
    country=request.json['Country']
    birthday=request.json['Birthday']
    isAdmin=request.json['isAdmin']

    cursor= mysql.connection.cursor()
    
    cursor.execute('''INSERT INTO users VALUES(%s,%s,%s,%s,%s,%s,%s,%s)''',(username,email,password,firstname,lastname,country,birthday,isAdmin))
    mysql.connection.commit()
    cursor.close()

    return "Done"

def getUserLoginDB(request):

    username= request.json['Username']
    password= request.json['Password']
    cursor= mysql.connection.cursor() 
    cursor.execute('''SELECT * FROM users where username=%s AND password=%s''',[username, password])
    user = cursor.fetchone()
    return user

