export const notificationsData = [
    {
        user: 'User1',
        message: 'Message1',
        summary: 'Summary1',
        time: 1234567890
    }
]
type TNotification = {
    user: string
    message: string
    summary: string
    time: number
}

type TCardsData = {
    imgUrl: string
    name: string
    notifications: TNotification[]
}

export const cardsData: TCardsData[] = [
    {
        imgUrl: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Name1',
        notifications: notificationsData
    },
    {
        imgUrl: 'https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Name2',
        notifications: notificationsData
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Name3',
        notifications: notificationsData
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Name4',
        notifications: notificationsData
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Name5',
        notifications: notificationsData
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1501432377862-3d0432b87a14?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Name6',
        notifications: notificationsData
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1532202802379-df93d543bac3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Name7',
        notifications: notificationsData
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Name8',
        notifications: notificationsData
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1532059196142-bd2a6bbbaa55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Name9',
        notifications: notificationsData
    }
]
