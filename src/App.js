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

export default function App(){
  return (
    <>
      <StatusBar/>
      <SaveButton />
    </>
  );
}