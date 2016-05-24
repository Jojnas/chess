alreadyFriends = function (userID){
    var user = Meteor.user();
    
    return user && 
        user.profile &&
        user.profile.friends && 
        user.profile.friends.indexOf(userId) > -1;  
};
