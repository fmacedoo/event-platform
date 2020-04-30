import { createContext, useContext } from 'react';

const AppContext = createContext({
    user: {
        name: 'John Doe',
        username: 'john.doe@dispostable.com',
    },
    title: 'Event Platform'
});

export const UserConsumer = AppContext.Consumer;
export const AppProvider = AppContext.Provider;

export const useAppContext = () => useContext(AppContext);

export default AppContext;
