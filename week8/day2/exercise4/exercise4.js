// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.

(function(user){

    const knownUser = document.createElement('div');
    knownUser.className = 'navbar-user';

    const profilePic = document.createElement('img');
    profilePic.src="https://scontent.fhfa4-1.fna.fbcdn.net/v/t39.30808-6/301860574_10159560957021849_3060145082652501220_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=XyKrMQP6SrMAX_tVyyH&_nc_ht=scontent.fhfa4-1.fna&oh=00_AfBmem9dXEqoBuKyn_BIXlSEKIzHtiqK-cG2ojij_qr5cg&oe=65B16168";

    profilePic.style.width = "35px";
    profilePic.style.height= "35px";
    profilePic.alt = "profile picture";
    profilePic.classname= "profile-picture";

    const userNameSpan = document.createElement('span');
    userNameSpan.textContent=user;

   knownUser.appendChild(profilePic);
   knownUser.appendChild(userNameSpan);

    const navbar = document.querySelector('.navbar');
    navbar.appendChild(knownUser);

})("   Judah Polak");
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.