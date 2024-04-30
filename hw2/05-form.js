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
    );
    const modalCourseProgrammingLanguages = document.getElementById(
      'modalCourseProgrammingLanguages'
    );
    if (programmingLanguages.checked) {
      modalCourseProgrammingLanguages.innerHTML = 'Programming Languages';
    } else {
      modalCourseProgrammingLanguages.innerHTML = '';
    }

    // Courses - Operating Systems
    const operatingSystems = document.getElementById('operatingSystems');
    const modalCourseOperatingSystems = document.getElementById(
      'modalCourseOperatingSystems'
    );
    if (operatingSystems.checked) {
      modalCourseOperatingSystems.innerHTML = 'Operating Systems';
    } else {
      modalCourseOperatingSystems.innerHTML = '';
    }

    // Courses - Full Stack Web Development
    const fullStackWebDevelopment = document.getElementById(
      'fullStackWebDevelopment'
    );
    const modalCourseFullStackWebDevelopment = document.getElementById(
      'modalCourseFullStackWebDevelopment'
    );
    if (fullStackWebDevelopment.checked) {
      modalCourseFullStackWebDevelopment.innerHTML =
        'Full Stack Web Development';
    } else {
      modalCourseFullStackWebDevelopment.innerHTML = '';
    }

    // Anything Else
    const anythingElse = document.getElementById('anythingElse').value;
    const modalAnythingElse = document.getElementById('modalAnythingElse');
    modalAnythingElse.innerText = `${anythingElse}`;
  };
