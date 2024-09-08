document.getElementById('student-data-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form data
    const formData = {
      student: parseInt(document.getElementById('student').value, 10),
      attendance: parseFloat(document.getElementById('attendance').value),
      grades: parseFloat(document.getElementById('grades').value),
      behavior_score: parseInt(document.getElementById('behavior_score').value, 10),
      extracurricular_activities: parseInt(document.getElementById('extracurricular_activities').value, 10),
      parent_involvement: parseInt(document.getElementById('parent_involvement').value, 10),
      socioeconomic_status: document.getElementById('socioeconomic_status').value,
    };
  
    // Handle submission logic here
    console.log(formData);
  });
  