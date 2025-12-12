import { useState } from 'react'
import { networkAtom } from './Atom'
import { RecoilRoot, useRecoilValue } from 'recoil';

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

    return (
    <>
      <button>Home</button>

      <button>My Network({network >= 100 ? "99+" : network})</button>
      <button>Jobs</button>
      <button>Messaging</button>
      <button>Notification</button>

      <button>ME</button>
    </>
  )
}

export default App
