let userRole = "user";

if(userRole){
    console.log("redirecting to admin dashboard...")
}
else if(userRole === "editor"){
    console.log("redirecting to editor panel...")
}
else{
    console.log("redirecting to Home page...")
}