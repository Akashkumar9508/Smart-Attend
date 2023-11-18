
document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#teacher_id").value;
    password =  document.querySelector("#teacher_pass").value;

    if (username == "bicky" && password == "bicky") {
       
        window.location.href = "teacher_dashboard.html";
    } 
    else if (username == "akash" && password == "akash") {
        window.location.href = "teacher_dashboard.html";
        
    } 
    else if (username == "nitesh" && password == "nitesh") {
        window.location.href = "teacher_dashboard.html";
    } 
    else{
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}


