function checkGrade(evt) {
  var grade =parseFloat(evt.currentTarget.value);

  if (grade > 100 || grade < 0) {
    console.log("Wrong value")
    evt.currentTarget.style.color = "red"
  } else {
    console.log("Correct Value")
    evt.currentTarget.style.color = "black"

  }

}

function GradeCalculator()
        {
            var HomeworkPercent =parseInt(document.getElementById('HomeworkPercent').innerHTML);
            var Quiz1Percent=parseInt(document.getElementById('Quiz1Percent').innerHTML);
            var Quiz2Percent=parseInt(document.getElementById('Quiz2Percent').innerHTML);
            var ParticipationPercent=parseInt(document.getElementById("ParticipationPercent").innerHTML);
            var AttendancePercent=parseInt(document.getElementById('AttendancePercent').innerHTML);


            var HomeworkGrade =parseFloat(document.getElementById('HomeworkGrade').value);
            var Quiz1Grade =parseFloat(document.getElementById('Quiz1Grade').value);
            var Quiz2Grade =parseFloat(document.getElementById('Quiz2Grade').value);
            var ParticipationGrade =parseFloat(document.getElementById('ParticipationGrade').value);
            var AttendanceGrade =parseFloat(document.getElementById('AttendanceGrade').value);

            if (HomeworkGrade > 100) {alert("Grade Should be from 0 to 100")
            }
            if (Quiz1Grade > 100) {alert("Grade Should be from 0 to 100")
            }
            if (Quiz2Grade > 100) {alert("Grade Should be from 0 to 100")
            }
            if(ParticipationGrade > 100) {alert("Grade Should be from 0 to 100")
            }
            if (AttendanceGrade > 100) {alert("Grade Should be from 0 to 100")
            }
            


            var Current_Grade = HomeworkPercent*HomeworkGrade/100 + Quiz1Percent*Quiz2Grade/100 + Quiz2Percent*Quiz2Grade/100 + ParticipationPercent*ParticipationGrade/100 +
            AttendancePercent*AttendanceGrade/100

            var display=document.getElementById('outputGrade');
            display.innerHTML=' Current Grade: ' + Current_Grade;
        }

function LetterGrade() {
      var HomeworkPercent =parseInt(document.getElementById('HomeworkPercent').innerHTML);
            var Quiz1Percent=parseInt(document.getElementById('Quiz1Percent').innerHTML);
            var Quiz2Percent=parseInt(document.getElementById('Quiz2Percent').innerHTML);
            var ParticipationPercent=parseInt(document.getElementById("ParticipationPercent").innerHTML);
            var AttendancePercent=parseInt(document.getElementById('AttendancePercent').innerHTML);


            var HomeworkGrade =parseFloat(document.getElementById('HomeworkGrade').value);
            var Quiz1Grade =parseFloat(document.getElementById('Quiz1Grade').value);
            var Quiz2Grade =parseFloat(document.getElementById('Quiz2Grade').value);
            var ParticipationGrade =parseFloat(document.getElementById('ParticipationGrade').value);
            var AttendanceGrade =parseFloat(document.getElementById('AttendanceGrade').value);


            var Current_Grade = HomeworkPercent*HomeworkGrade/100 + Quiz1Percent*Quiz1Grade/100 + Quiz2Percent*Quiz2Grade/100 + ParticipationPercent*ParticipationGrade/100 + 
            AttendancePercent*AttendanceGrade/100
      
      
      if (Current_Grade <= 100 && Current_Grade >=90) {letter_grade = "A"}

      if (Current_Grade < 90 && Current_Grade >=80) {letter_grade = "B"}

      if (Current_Grade < 80 && Current_Grade >=70) {letter_grade = "C"}

      if (Current_Grade < 70  && Current_Grade>=60 ){letter_grade = "D"}
      
      if (Current_Grade < 60) {letter_grade = "F"}

      var display=document.getElementById('LetterGrade');
            display.innerHTML=' Current Letter Grade: ' + letter_grade;
      
      }
