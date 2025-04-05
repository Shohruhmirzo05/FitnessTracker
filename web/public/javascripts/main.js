// Main JavaScript for Fitness Goal Tracker

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      form.classList.add('was-validated');
      
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('invalid', function() {
          input.classList.add('is-invalid');
        });
        
        input.addEventListener('input', function() {
          if (input.validity.valid) {
            input.classList.remove('is-invalid');
          }
        });
      });
    });
  });
  
  const dates = document.querySelectorAll('.date-format');
  dates.forEach(date => {
    const rawDate = date.getAttribute('data-date');
    if (rawDate) {
      const formattedDate = new Date(rawDate).toLocaleDateString();
      date.textContent = formattedDate;
    }
  });
  
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}); 