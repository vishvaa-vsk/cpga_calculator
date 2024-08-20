const subjectsData = [
    {
        "Communicative English": {credits: 3, code: "23EN101T"},
        "Matrices and Calculus": {credits: 4, code: "23MA101T"},
        "Engineering Physics": {credits: 3, code: "23PH101T"},
        "Engineering Chemistry": {credits: 3, code: "23CH101T"},
        "Problem Solving and Python Programming": {credits: 3, code: "23CS101T"},
        "Heritage of Tamils": {credits: 1, code: "23GE101T"},
        "Communicative English Laboratory": {credits: 1, code: "23EN102L"},
        "Physics and Chemistry Laboratory": {credits: 2, code: "23BS102L"},
        "Problem Solving and Python Programming Laboratory": {credits: 2, code: "23CS102L"}
    },
    {
        "Environmental Science and Sustainability": {credits: 2, code: "23CH102T"},
        "Programming in C": {credits: 3, code: "23CS103T"},
        "Technical English": {credits: 3, code: "23EN103T"},
        "Tamil and Technology": {credits: 1, code: "23GE102T"},
        "Statistics and Numerical Methods": {credits: 4, code: "23MA102T"},
        "Physics for Computer Science Engineers": {credits: 3, code: "23PH105T"},
        "Engineering Graphics": {credits: 4, code: "23ME101T"},
        "Technical English Laboratory": {credits: 1, code: "23EN104L"},
        "Engineering Practices Laboratory": {credits: 2, code: "23ME102L"},
        "Programming in C Laboratory": {credits: 2, code: "23CS104L"}
    },
    {
        "Digital Principles and Computer Organization": {credits: 4, code: "23CS201T"},
        "Foundations of Data Science": {credits: 3, code: "23AD208T"},
        "Data Structures": {credits: 3, code: "23CS202T"},
        "Object Oriented Programming": {credits: 3, code: "23IT201T"},
        "Operating Systems": {credits: 4, code: "23CS2031"},
        "Data Structures Laboratory": {credits: 2, code: "23CS204L"},
        "Object Oriented Programming Laboratory": {credits: 2, code: "23IT202L"},
        "Data Science Laboratory": {credits: 2, code: "23AD209L"},
        "Quantitative Aptitude & Verbal Reasoning": {credits: 1, code: "23TP201L"}
    },
    {
        "Software Engineering": {credits: 3, code: "23IT203T"},
        "Design and Analysis of Algorithms": {credits: 4, code: "23CS205T"},
        "Discrete Mathematics": {credits: 4, code: "23MA201T"},
        "Database Management Systems": {credits: 3, code: "23IT204T"},
        "Java Programming": {credits: 3, code: "23IT205T"},
        // "NCC Credit Course Level 2": {credits: 3, code: "23NCC201 / 23NCC202"},
        "Database Management Systems Laboratory": {credits: 2, code: "23IT206L"},
        "Java Programming Laboratory": {credits: 2, code: "23IT207L"},
        "Quantitative Aptitude & Behavioural Skills": {credits: 1, code: "23TP202L"}
    },
    {
        "Compiler Design": {credits: 4, code: "23CS301T"},
        "Open Elective-I": {credits: 3, code: "OEC"},
        "Mandatory Course-I": {credits: 3, code: "MC"},
        "Computer Networks": {credits: 4, code: "23CS3021"},
        "Full Stack Programming": {credits: 4, code: "23CS3031"},
        "Professional Elective-I": {credits: 3, code: "PEC1"},
        "Professional Elective-II": {credits: 3, code: "PEC2"},
        "Quantitative Aptitude & Communication Skills": {credits: 1, code: "23TP301L"}
    },
    {
        "Mobile Computing": {credits: 3, code: "23IT305T"},
        "Open Elective-II": {credits: 3, code: "OEC2"},
        "Mandatory Course-II": {credits: 0, code: "MC2"},
        "NCC Credit Course Level 3": {credits: 3, code: "23NCC301/23NCC302"},
        "Cryptography and Cyber Security": {credits: 4, code: "23CS3041"},
        "Artificial Intelligence and Machine Learning": {credits: 4, code: "23AD3071"},
        "Professional Elective-III": {credits: 3, code: "PEC3"},
        "Professional Elective-IV": {credits: 3, code: "PEC4"},
        "Mobile Application Development Lab": {credits: 2, code: "23IT306L"},
        "Quantitative Aptitude & Soft Skills": {credits: 1, code: "23TP302L"},
        "Mini Project": {credits: 2, code: "23CS305L"}
    },
    {
        "Human Values and Ethics": {credits: 2, code: "23MS401T"},
        "Elective - Management": {credits: 3, code: "MNGT"},
        "Open Elective-III": {credits: 3, code: "OEC3"},
        "Professional Elective-V": {credits: 3, code: "PEC5"},
        "Professional Elective-VI": {credits: 3, code: "PEC6"},
        "Internship": {credits: 1, code: "23CS401L"}
    },
    {
        "Project Work": {credits: 10, code: "23CS402L"}
    }
];

function createSemesterContainers() {
    const numSemesters = document.getElementById('numSemesters').value;
    const semesterContainers = document.getElementById('semesterContainers');
    semesterContainers.innerHTML = '';
    

    for (let i = 0; i < numSemesters; i++) {
        const semesterDiv = document.createElement('div');
        semesterDiv.className = 'semester';
        semesterDiv.innerHTML = `<h2>Semester ${i + 1}</h2>`;

        // Generate the grade inputs based on the number of subjects in the current semester
        const subjects = subjectsData[i];
        for (const subject in subjects) {
            if (subjects.hasOwnProperty(subject)) {
                const gradeInputDiv = document.createElement('div');
                gradeInputDiv.className = 'grade-input';
                gradeInputDiv.innerHTML = `
                    <label for="${subjects[subject].code}">
                        ${subject} (${subjects[subject].credits} Credits, Code: ${subjects[subject].code})
                    </label>
                    <select id="${subjects[subject].code}" required name="${subjects[subject].code}">
                        <option value="" selected disabled>Select Grade</option>
                        <option value="O">O</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="U">U</option>
                        <option value="W">W</option>
                    </select>
                `;
                semesterDiv.appendChild(gradeInputDiv);
            }
        }

        if (numSemesters >= 1) {
        document.getElementById('submit-btn').style.display = 'block';
        }

        semesterContainers.appendChild(semesterDiv);
    }
}


function submitSemesterData() {
    const numSemesters = document.getElementById('numSemesters').value;
    const semesterContainers = document.getElementById('semesterContainers');
    const formData = new FormData();

    for (let i = 0; i < numSemesters; i++) {
    const semesterDiv = semesterContainers.children[i];
    const gradeInputs = semesterDiv.querySelectorAll('select');
    const semesterData = {};

    gradeInputs.forEach((gradeInput) => {
        semesterData[gradeInput.id] = gradeInput.value;
    });

    const semesterKey = `semester_${i + 1}`;
    const semesterValue = JSON.stringify(semesterData);
    formData.append(semesterKey, semesterValue);
}

$.ajax({
    type: 'POST',
    url: '/semester_data',
    data: formData,
    contentType: false,
    processData: false,
    success: function(data) {
        window.location.href = '/result';
    },
    error: function(xhr, status, error) {
        console.error('Error:', xhr.status, xhr.statusText);
    }
});
}