const isFormValid = (event) => {
  const form = event.target;

  event.preventDefault();
  form.classList.add("was-validated");

  if (!form.checkValidity()) {
    event.stopPropagation();
    return false;
  }

  return true;
};

export default isFormValid;
