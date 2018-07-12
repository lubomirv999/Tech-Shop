let subscriptions = {
    'loginUser': [],
    'notification': [],
    'logoutUser': [],
    'createProduct': [],
    'createReview': [],
    'editProduct': [],
    'editUser': []
};

export default {
    events: {
        loginUser: 'loginUser',
        notification: 'notification',
        logoutUser: 'logoutUser',
        createProduct: 'createProduct',
        createReview: 'createReview',
        editProduct: 'editProduct',
        editUser: 'editUser'
    },
    subscribe: (eventName, fn) =>
        subscriptions[eventName].push(fn),
    trigger: (eventName, data) =>
        subscriptions[eventName].forEach(fn => fn(data))
}