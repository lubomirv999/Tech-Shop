let subscriptions = {
    'loginUser': [],
    'notification': [],
    'logoutUser': [],
    'createProduct': []
};

export default {
    events: {
        loginUser: 'loginUser',
        notification: 'notification',
        logoutUser: 'logoutUser',
        createProduct: 'createProduct'
    },
    subscribe: (eventName, fn) =>
        subscriptions[eventName].push(fn),
    trigger: (eventName, data) =>
        subscriptions[eventName].forEach(fn => fn(data))
}