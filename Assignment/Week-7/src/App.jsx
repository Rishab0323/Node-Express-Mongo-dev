import { useMemo, useState } from 'react'
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationCount } from './Atom'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  )
}

function MainApp(){
  const network = useRecoilValue(networkAtom);
  const job = useRecoilValue(jobAtom);
  const notification = useRecoilValue(notificationAtom);
  const [message,setMessageCount] = useRecoilState(messagingAtom);
  const totalNotification = useRecoilValue(totalNotificationCount);



  // const totalNotification = useMemo(() => {
  //   return network + job + notification + message;
  // },[network,job,notification,message]);

    return (
    <>
      <button>Home</button>

      <button>My Network({network >= 100 ? "99+" : network})</button>
      <button>Jobs({job})</button>
      <button>Messaging({message})</button>
      <button>Notification({notification})</button>

      {/* <button onClick ={() => {
        setMessageCount(message + 1) ;
      }}>ME</button> */}
      <button>ME({totalNotification})</button>
    </>
  )
}

export default App
