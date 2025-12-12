import {atom, selector, useRecoilValue} from 'recoil'

export const networkAtom = atom({
    key:"networkAtom",
    default:96
});

export const jobAtom = atom({
    key:"jobAtom",
    default:0
})

export const notificationAtom = atom({
    key:"notificationAtom",
    default:12
})

export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
})

export const totalNotificationCount = selector({
    key: "totalNotificationCount",
    get: ({get}) => {
        const networkAtomCount = useRecoilValue(networkAtom);
        const jobAtomCount = useRecoilValue(jobAtom);
        const notificationCount = useRecoilValue(notificationAtom);
        const messagingAtomCount = useRecoilValue(messagingAtom);

        return networkAtomCount + jobAtomCount + notificationCount + messagingAtomCount;
    }
}) 