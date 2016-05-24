FlowRouter.route('/', {
   name: 'main', 
   action(){
        // Blaze.renderWithData(Template.layout, { child: 'main'}, document.body);
       BlazeLayout.render('layout', {child: 'main'});
    }
});

FlowRouter.route('/users', {
    name: 'users',
    action(){
        BlazeLayout.render('layout', {child: 'users'});
    }
});
