import styles from "./Login.module.scss";

export default function Login() {
  return (
    <main className={styles.main}>
      <div className="login-wrapper">
        <div className="logo-wrapper">
          <h1>Hello</h1>
        </div>
        <div className="tagline-wrapper">A secure way to say Hello</div>
        <div className="google-wrapper">
          <div className="icon-wrapper"></div>
          <span className="text">Sign in with Google</span>
        </div>
        <div className="guest-wrapper">
          <div className="icon-wrapper"></div>
          <span className="text">Sign in as Guest</span>
        </div>
        <div className="or-divider"></div>
        <div className="email-wrapper">
          <input type="text" placeholder="Enter email" />
          <div className="icon-wrapper"></div>
          <div className="error">Invalid email</div>
        </div>
      </div>
    </main>
  );
}
