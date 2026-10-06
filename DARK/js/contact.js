(() => {
  "use strict";

  const form = document.querySelector("#contact-form");

  if (!form) {
    console.error("Contact form setup failed: #contact-form was not found.");
    return;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const fields = new FormData(form);
    const subject = fields.get("subject") || "Portfolio enquiry";
    const body = [
      `Name: ${fields.get("name")}`,
      `Email: ${fields.get("email")}`,
      `Company: ${fields.get("company") || ""}`,
      "",
      fields.get("message")
    ].join("\n");
    const query = new URLSearchParams({ subject, body });

    window.location.href = `mailto:nguyenbinhltv@gmail.com?${query.toString()}`;
  });
})();
