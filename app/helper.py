# Define grade values
grade_values = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'U': 0,
    'W': 0,
    'SA': 0,
    'AB': 0,
    'RA': 0,
    'SE': 0
}

credits_points = {
    "23EN101T": 3,
    "23MA101T": 4,
    "23PH101T": 3,
    "23CH101T": 3,
    "23CS101T": 3,
    "23GE101T": 1,
    "23EN102L": 1,
    "23BS102L": 2,
    "23CS102L": 2,
    "23CH102T": 2,
    "23CS103T": 3,
    "23EN103T": 3,
    "23GE102T": 1,
    "23MA102T": 4,
    "23PH105T": 3,
    "23ME101T": 4,
    "23EN104L": 1,
    "23ME102L": 2,
    "23CS104L": 2,
    "23CS201T": 4,
    "23AD208T": 3,
    "23CS202T": 3,
    "23IT201T": 3,
    "23CS2031": 4,
    "23CS204L": 2,
    "23IT202L": 2,
    "23AD209L": 2,
    "23TP201L": 1,
    "23IT203T": 3,
    "23CS205T": 4,
    "23MA201T": 4,
    "23IT204T": 3,
    "23IT205T": 3,
    "23IT206L": 2,
    "23IT207L": 2,
    "23TP202L": 1,
    "23CS301T": 4,
    "OEC": 3,
    "MC": 3,
    "23CS3021": 4,
    "23CS3031": 4,
    "PEC1": 3,
    "PEC2": 3,
    "23TP301L": 1,
    "23IT305T": 3,
    "OEC2": 3,
    "MC2": 0,
    "23CS3041": 4,
    "23AD3071": 4,
    "PEC3": 3,
    "PEC4": 3,
    "23IT306L": 2,
    "23TP302L": 1,
    "23CS305L": 2,
    "23MS401T": 2,
    "MNGT": 3,
    "OEC3": 3,
    "PEC5": 3,
    "PEC6": 3,
    "23CS401L": 1,
    "23CS402L": 10
}


def calculateGPA(semester,userSubjects):
    totalCredits = 0
    totalGradePoints = 0
    arrears = []

    for code, grade in userSubjects.items():
        if code in credits_points:
            if grade == "U":
                arrears.append(code)
            if grade in grade_values:
                grade_point = grade_values[grade]
                totalCredits +=  credits_points[code]
                totalGradePoints += grade_point * credits_points[code]
        else:
            return -1
    gpa = totalGradePoints  / totalCredits if totalCredits != 0 else 0
    result = {semester:gpa,"arrears":arrears,"credits":totalCredits}
    return result

def calculateCGPA(result:dict):
    totalCredits = 0
    totalGradePoints = 0 
    for sem in result:
        for key in sem:
            if key.startswith("semester"):
                totalCredits += sem['credits']
                totalGradePoints += sem['credits'] * sem[key]
    cgpa = totalGradePoints/totalCredits if totalCredits > 0 else 0
    return cgpa
            
