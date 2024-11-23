export default function Login() {
    return <a href="/api/auth/login">Login</a>;
  }

exports.onExecutePostLogin = async (event, api) => {
  api.redirect.sendUserTo("http://localhost:3000/home");
  };
