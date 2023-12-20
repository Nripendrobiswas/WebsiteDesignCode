function showFaculty() {
    document.getElementById('facultySection').style.display = 'block';
    document.getElementById('staffSection').style.display = 'none';
    document.getElementById('studentsSection').style.display = 'none';
    document.getElementById('NoticeSection').style.display = 'none';
}

function showStaff() {
    document.getElementById('facultySection').style.display = 'none';
    document.getElementById('staffSection').style.display = 'block';
    document.getElementById('studentsSection').style.display = 'none';
    document.getElementById('NoticeSection').style.display = 'none';
}

function showStudents() {
    document.getElementById('facultySection').style.display = 'none';
    document.getElementById('staffSection').style.display = 'none';
    document.getElementById('studentsSection').style.display = 'block';
    document.getElementById('NoticeSection').style.display = 'none';
}

function showNotice() {
    document.getElementById('facultySection').style.display = 'none';
    document.getElementById('staffSection').style.display = 'none';
    document.getElementById('studentsSection').style.display = 'none';
    document.getElementById('NoticeSection').style.display = 'block';
}


function B11(){
    document.getElementById('B11Section').style.display='block';
    document.getElementById('B12Section').style.display='none';
    document.getElementById('B13Section').style.display='none';
    document.getElementById('B14Section').style.display='none';
    document.getElementById('B20Section').style.display='none';
}

function B12(){
    document.getElementById('B11Section').style.display='none';
    document.getElementById('B12Section').style.display='block';
    document.getElementById('B13Section').style.display='none';
    document.getElementById('B14Section').style.display='none';
    document.getElementById('B20Section').style.display='none';

}
function B13(){
    document.getElementById('B11Section').style.display='none';
    document.getElementById('B12Section').style.display='none';
    document.getElementById('B13Section').style.display='block';
    document.getElementById('B14Section').style.display='none';
    document.getElementById('B20Section').style.display='none';

}
function B14(){
    document.getElementById('B11Section').style.display='none';
    document.getElementById('B12Section').style.display='none';
    document.getElementById('B13Section').style.display='none';
    document.getElementById('B14Section').style.display='block';
    document.getElementById('B20Section').style.display='none';

}
function B20(){
    document.getElementById('B11Section').style.display='none';
    document.getElementById('B12Section').style.display='none';
    document.getElementById('B13Section').style.display='none';
    document.getElementById('B14Section').style.display='none';
    document.getElementById('B20Section').style.display='block';


}
