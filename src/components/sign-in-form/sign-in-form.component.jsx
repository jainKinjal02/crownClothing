import { useState} from 'react';
import { signInWithGooglePopup ,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () =>{

    const [formFields , setFormFields] = useState(defaultFormFields);
    const {email , password} = formFields;


    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();   
       
    };

    //console.log(formFields);
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await signInAuthUserWithEmailAndPassword(email,password);
          
            resetFormFields();
          
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('User not found with this email');
                    break;
                default:
                    console.log(error);
            }
           
           
        }
    }

    const handleChange = (event)=>{
        const {name , value} = event.target;

        setFormFields({...formFields , [name]: value});

        
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email"
                inputOptions ={{  type:"email", required:true, onChange:handleChange ,name:"email", value:email}}
              />
               
                <FormInput label="Password" inputOptions={{type :"password", required: true, onChange:handleChange ,name:"password" ,value:password}} />

                <div className='buttons-container'>
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
               
                
            </form>
        </div>
    )
}

export default SignInForm;