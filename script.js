const users = []
const listElement = document.getElementById("list");
addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event);
    const user = {
        name:event.target[0].value,
        email:event.target[1].value,
        age:event.target[2].value,
    };
    users.push(user);
    updateRegisteredList(listElement)
    console.log(users);
});

function updateRegisteredList(list) {
    list.innerHTML = "<br>";
    users.length ?
        users.forEach(user => {list.innerHTML += `<li>${user.name} (${user.email},  ${user.age})</li><br>`})
        : list.innerHTML += "<p>Sem usuários registrados</p>";
};
console.log(listElement);
updateRegisteredList(listElement);
