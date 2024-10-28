import * as Gatsby from "gatsby"
import { useState } from "react"

export default function Pagina2(){
    const [inputs, setinputs] = useState({nome: "", email: "", assunto: "", mensagem: ""});
    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values => ({... values, [name]: value}));
    }

    const encode = (data) => {
        return Object.keys(data).map(key=>encodeURIComponent(key)+ " = " + encodeURIComponent(data[key])).join("&");
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetch( "/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded" },
            body: encode({"form-name": "form_react", ...inputs})
        }).then(()=>{
            alert("Em breve daremos um retorno do seu contato. Obrigado!");
            setInputs({nome: "", email: "", assunto: "", mensagem: ""});
        }).catch(error =>alert(error))
    }
}