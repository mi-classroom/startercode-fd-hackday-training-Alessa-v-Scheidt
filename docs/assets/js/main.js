/* Classes & Functions
============================================================================ */

class FormValidator {
  constructor() {
    this.errorCount = 0;
  }

  scan() {
    document.querySelectorAll('form[data-js-validate=true]').forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        this.checkForm(form);
      })
    });
  };

  checkForm(form) {
    const fields = form.querySelectorAll("[required]");
    let hasErrors = false;

    for (const field of fields) {
      if (field.value.length < 5) {
        field.classList.add("ut-has-error")
        hasErrors = true;
      } else {
        field.classList.remove("ut-has-error")
      }
    }

    if (!form.hasErrors) form.submit();
  };
}

class NavToNeighbours {

  createNavigation(prevItem, nextItem) {

    const navSnippet = `
      <div class="nav-wrap">
      </div>`;

    document.getElementById('mainContent').insertAdjacentHTML('beforeend', navSnippet);
  }

  init() {
    if (typeof prevItem === 'undefined') return;
    if (typeof nextItem === 'undefined') return;
    this.createNavigation(prevItem, nextItem);
  };
}

class Accordian {
  constructor() {
    this.elements = document.querySelectorAll("[data-target]");
  }

  init() {
    this.elements.forEach((ele) => {

    });
  }
}


/* Main
============================================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* Form Validator */
  const validator = new FormValidator();
  validator.scan();

  /* Accordion */
  const accordian = new Accordian();
  accordian.init();
});

