import DefaultLayout from "../Layout/DefaultLayout";

export default function Signup() {
    return(
            <DefaultLayout>
                  <form className="form">
                    <h1>SignUp</h1>
                    <label>Email</label>
                    <input type="text"></input>
                    <label>Nombre</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button>Login</button>
                </form>
            </DefaultLayout>
        )
}