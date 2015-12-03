AccountsTemplates.configureRoute('signIn', {
    path: '/login',
    template: 'login'
});

AccountsTemplates.configureRoute('signUp', {
    path: '/register',
    template: 'login',
});

FlowRouter.notFound = {
    action: ()  => {
        BlazeLayout.render('MainLayout', {
            bottomZone: "footer",
            mainZone: "pageNotFound",
            topZone: "nav"
        });
    }
};

FlowRouter.route('/', {
    name: 'home',
    subscriptions: (params, queryParams) => {

    },
    action: (params) => {
        BlazeLayout.render('MainLayout', {
            topZone: "nav",
            mainZone: "main",
            bottomZone: "footer"
        });
    }
});
