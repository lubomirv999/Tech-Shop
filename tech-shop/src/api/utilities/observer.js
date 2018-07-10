let subscriptions = {
    'loginUser': [],
    'notification': [],
    'logoutUser': [],
    'createProduct': [],
    'createReview': [],
    'editProduct': []
};

export default {
    events: {
        loginUser: 'loginUser',
        notification: 'notification',
        logoutUser: 'logoutUser',
        createProduct: 'createProduct',
        createReview: 'createReview',
        editProduct: 'editProduct'
    },
    subscribe: (eventName, fn) =>
        subscriptions[eventName].push(fn),
    trigger: (eventName, data) =>
        subscriptions[eventName].forEach(fn => fn(data))
}