/*
 * register routes
 */
const Routes = Object.freeze({
    Projects: '/projects',
    ProjectsDetail: '/projects/:id',
    Clients: '/clients',
    ClientsDetail: '/clients/:id',
    Invoices: '/invoices',
    InvoicesDetail: '/invoices/:id',
    InvoicesDetailAddTime: '/invoices/:id/add'
});

/* 
 * replaces : values with object values
 * route('/projects/:id', { id: 9 });
 */
const route = (path, options = {}) => {
    Object.keys(options).forEach(key => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;
};

export {
    Routes,
    route
};