import { useFormInput } from './components/useFormInput';
import { useOnlineStatus } from './components/useOnlineStatus';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
}

function SaveButton(){
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save Progress' : 'Reconnecting...'}
    </button>
  );
}

function Form(){
  const firstNameProps = useFormInput('Rany');
  const lastNameProps = useFormInput('Virakvuth');

  return (
    <>
      <label>
        First Name:
        <input {...firstNameProps}/>
      </label>
      <label>
        Last Name:
        <input {...lastNameProps}/>
      </label>
      <p><b>Good Night, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  );
}

export default function App(){
  return (
    <>
      <Form />
      <StatusBar/>
      <SaveButton />
    </>
  );
}