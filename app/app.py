from flask import Flask,session,request,redirect,url_for,render_template,flash,json

from helper import calculateGPA,calculateCGPA

app = Flask(__name__)

app.config['SECRET_KEY'] = 'eb7df66019e30586936b33bc5658d5794184790ed37eea4c196f736b9e83afc4'

@app.route('/',methods=["GET","POST"])
def home():
    if request.method == "POST":
        session.permanent = True
        name,year,regno,dept = request.form["name"],request.form["year"],request.form["regno"],request.form.get('department')
        session["username"] = name
        session["year"] = int(year)
        session["regno"] = str(regno)
        session["dept"] = str(dept)
        return redirect(url_for("display_sems"))
    else:
        flash("Internal error")
    return render_template("index.html")

@app.route("/displaySems",methods=["GET","POST"])
def display_sems():
    if session.get("username") is not None:
        return render_template("displaySemesters.html")
    else:
        return "<h1> session expired! </h1>"

@app.route('/semester_data',methods=["GET","POST"])
def semester_calculation():
    if request.method == "POST":
        scores = [] 
        semester_data =  request.form
        for key,value in semester_data.items():
            semester = key
            data = json.loads(value)
            calc = calculateGPA(semester,data)
            scores.append(calc)
        cgpa = calculateCGPA(scores)
        session["scores"] = scores
        session["cgpa"] =  cgpa
    return redirect(url_for("display_result"))

@app.route('/result')
def display_result():
    name = session.get("username")
    regno = session.get("regno")
    dept = session.get("dept")
    scores = session.get("scores")
    arrears = []
    cgpa = session.get("cgpa")
    for data in scores:
        for key,value in data.items():
            if key == "arrears":
                arrears.append(value)
    return render_template("displayResults.html",name=name,regno=regno,dept=dept,arrears=arrears,cgpa=cgpa,scores=scores)


if __name__ == '__main__':
    app.run(debug=True)