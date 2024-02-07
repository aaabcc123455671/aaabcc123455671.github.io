const form=document.getElementById('form')
const name=document.getElementById('username')
const email=document.getElementById('email')
const feedback=document.querySelector('feedback')
const btn=document.querySelector('button')

form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInputs();
});

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.quaySeletor('error');

    errorDisplay.innerText='';
    inputControl.classlist.add('sucess');
    inputControl.classlist.remove('error')
};

const validateInputs=()=>{
    const nameValue= name.value.trim();
    const emailValue=email.value.trim();
    

    if(nameValue===''){
        setError(username,'Name is required');
    }else{
        setSucess(username);
    }

    if(emailValue===''){
        setError(email,'Email is required');
    }else{
        setSucess(email);

    

    }
};
btn.addEventListener("submit",()=>{
    feedback.innerHTML=<h1>Thank you for your feedback.</h1>;
});


