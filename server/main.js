// import { Meteor } from 'meteor/meteor';
//
// Meteor.startup(() => {
//   // code to run on server at startup
// });


Meteor.publish('users', function(){
    return Meteor.users.find({}, {username: 1, profile: 1});
});