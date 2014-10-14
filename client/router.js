Router.configure({
    layoutTemplate: 'basicLayout',
    notFoundTemplate: 'notFound',
    yieldTemplates: {
        'header': { to: 'header' },
        'footer': { to: 'footer' }
    }
});

Router.map(function () {
    this.route('home', {
        path :  '/',
        template: 'home'
    });
});

Router.map(function () {
    this.route('about', {
        path :  '/about',
        template: 'about'
    });
});

Router.map(function () {
    this.route('contact', {
        path :  '/contact',
        template: 'contact'
    });
});

Router.map(function () {
    this.route('calendar', {
        path :  '/calendar',
        template: 'calendar'
    });
});

