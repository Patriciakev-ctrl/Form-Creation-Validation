async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try {
        
        const response = await fetch(apiUrl);
        const users = await response.json();
        
        dataContainer.innerHTML = '';
        const userList = document.createElement("ul");
        users.forEach(element => {
            const user = document.createElement("li");
            user.textContent = element.name;
            userList.appendChild(user);
            console.log(element);
        });
        dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.innerHTML = 'Failed to load user data.' + error;
    }

}
document.addEventListener("DOMContentLoaded",()=>{
    fetchUserData();
});