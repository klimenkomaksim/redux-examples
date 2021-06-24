export const fetchMessage = async (count) => {
    const message = count
        ? `CURRENT COUNT IS ${count}`
        : 'VERY IMPORTANT MESSAGE';
    
    return message;
};
