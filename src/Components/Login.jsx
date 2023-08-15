import ("./CSS/Login.css");

const Login = () => {

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        
        if (username === "juan_perez" && password === "1234") {
            alert("Bienvenido");
            window.location.href = "./UsuarioLogin";
        } else {
            alert("Error");
             window.location.href = "./Error";
        }
    };

    return (
        <>
        <div className="loginTitleContainer d-flex flex-column justify-content-center align-items-left container-fluid ">
        <h1 className="display-6 fw-bold  pb-0">LOGIN</h1>
        <p className="fw-normal"> Ingresá a tu perfil con tu nombre de usuario y contraseña </p>
      </div>
        <section className="loginContainer">
            <form className="formContainer" onSubmit={handleLoginSubmit}>
                <div className="inputContainer">
                <label htmlFor="username">Usuario</label>
                <input type="text" name="username" id="username" placeholder="Ingresa el nombre de usuario" required />
                </div>
                <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Ingresa la contraseña" required />
                </div>
                <input type="submit" id="btnSubmit" value="Enviar" />
            </form>
        </section>
        </>
    );
}

export default Login