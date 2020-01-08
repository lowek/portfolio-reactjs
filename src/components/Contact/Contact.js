import React from "react";
import * as emailjs from "emailjs-com";
import styles from "./Contact.module.scss";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const toEmail = "YOUR_EMAIL";

    if (
      (name !== null) &
      (name !== "") &
      (email !== null) &
      (email !== "") &
      (message !== null) &
      (message !== "")
    ) {
      let templateParams = {
        replay_to: email,
        from_name: name,
        to_name: toEmail,
        message_html: message
      };
      emailjs.send(
        "smtp_server",
        "TEMPLATE_ID",
        templateParams,
        "TOKEN_EMAILJS"
      );
      this.resetForm();
    }
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div id="contacts" className={styles.contact__wrapper}>
        <div className={styles.contact__wrapper__row} data-aos="fade-down">
          <h1 className={styles.contact__wrapper__row__headline}>
            Skontaktuj się ze mną
          </h1>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className={styles.contact__wrapper__row__form}
          >
            <label className={styles.contact__wrapper__row__form__label}>
              <span>Your name</span>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
                required
              />
            </label>
            <label className={styles.contact__wrapper__row__form__label}>
              <span>Your e-mail</span>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this, "email")}
                required
              />
            </label>
            <label className={styles.contact__wrapper__row__form__label}>
              <span>Tell about your project</span>
              <input
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
                required
              />
            </label>
            <label className={styles.contact__wrapper__row__form__label}>
              <div
                className={styles.contact__wrapper__row__form__label__submit}
              >
                <button type="submit">Wyślij</button>
              </div>
            </label>
            {this.state.sent && <p>Wiadomośc wysłana!</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
