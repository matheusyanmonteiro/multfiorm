import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  
  useEffect(() => {
    if(state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);
  
  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert("Pow to errou agora ??");
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }

  return (
    <Theme>
      <C.Container>
      <p>Passo 3/3</p>
        <h1>LEGAL {state.name}, onde te achamos?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr/>

        <label>
          Qual o teu Email?
          <input 
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual o teu GitHUB?
          <input 
            type="url"
            value={state.github}
            onChange={handleGitHubChange}
          />
        </label>

      <Link to='/step2' className="backButton">Voltar</Link>
      <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>  
  );
}