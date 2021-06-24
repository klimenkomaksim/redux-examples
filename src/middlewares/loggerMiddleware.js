const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('prev state', store.getState());
            console.log('dispatching', action)
            
            const result = next(action)
            console.log('result', result)

            console.log('next state', store.getState())
            
            return result
        };
    };
};

export default logger;
