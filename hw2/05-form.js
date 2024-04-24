const form = document.getElementById('form');
const handleSubmit = function handleSubmit(event) {
  insertUsersFormInputsIntoModal();
  console.log('Form submitted.');
  event.preventDefault();
};
form.addEventListener('submit', handleSubmit);

const insertUsersFormInputsIntoModal =
  function insertUsersFormInputsIntoModal() {
    // Full Name
    const fullname = document.getElementById('fullname').value;
    const modalFullname = document.getElementById('modalFullname');
    modalFullname.innerText = `${fullname}`;

    // Email
    const email = document.getElementById('email').value;
    const modalEmail = document.getElementById('modalEmail');
    modalEmail.innerText = `${email}`;

    // Registration Status
    const registrationStatus =
      document.getElementById('registrationStatus').value;
    const modalRegistrationStatus = document.getElementById(
      'modalRegistrationStatus'
    );
    modalRegistrationStatus.innerText = `${registrationStatus}`;

    // Courses - Programming Languages
    const programmingLanguages = document.getElementById(
      'programmingLanguages'
    ).checked;
    const modalCourseProgrammingLanguages = document.getElementById(
      'modalCourseProgrammingLanguages'
    );
    if (isChecked(programmingLanguages)) {
      modalCourseProgrammingLanguages.innerHTML = 'Programming Languages';
    }

    // Courses - Operating Systems
    const operatingSystems =
      document.getElementById('operatingSystems').checked;
    const modalCourseOperatingSystems = document.getElementById(
      'modalCourseOperatingSystems'
    );
    if (isChecked(operatingSystems)) {
      modalCourseOperatingSystems.innerHTML = 'Operating Systems';
    }

    // Courses - Full Stack Web Development
    const fullStackWebDevelopment = document.getElementById(
      'fullStackWebDevelopment'
    ).checked;
    const modalCourseFullStackWebDevelopment = document.getElementById(
      'modalCourseFullStackWebDevelopment'
    );
    if (isChecked(fullStackWebDevelopment)) {
      modalCourseFullStackWebDevelopment.innerHTML =
        'Full Stack Web Development';
    }

    // Anything Else
    const anythingElse = document.getElementById('anythingElse').value;
    const modalAnythingElse = document.getElementById('modalAnythingElse');
    modalAnythingElse.innerText = `${anythingElse}`;
  };

const isChecked = function isChecked(course) {
  if (course === true) {
    return true;
  } else {
    return false;
  }
};
