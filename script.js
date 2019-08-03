var users = document.getElementById('users');

var generate = document.getElementById('generate');

generate.addEventListener('click', function () {
    users.innerHTML = "";
    
    var no = document.getElementById('no').value;
    var url = `https://randomuser.me/api/?results=${no}`;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.response).results;
        
            for (var x = 0; x < data.length; x++) {
                //var li = document.createElement("li");
                var p = document.createElement("p");
                var imahe = document.createElement("img");

                imahe.src = data[x].picture.thumbnail;

                p.innerText = `
                    ${x+1}
                    ${data[x].name.title} ${data[x].name.first} ${data[x].name.last}
                `;
                
                users.appendChild(imahe);
                users.appendChild(p);
            }
        }
    };
    
    xhr.open('GET', url);
    xhr.send();
});