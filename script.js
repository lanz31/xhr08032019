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
                var paragraph = document.createElement("p");
                paragraph.innerText = `${x}: ${data[x].name.title} ${data[x].name.first} ${data[x].name.last}`;
                paragraph.id = "p" + x;
                document.querySelector('#users').appendChild(paragraph);

                var imahe = document.createElement("img");
                imahe.src = data[x].picture.thumbnail;
                document.querySelector("#" + paragraph.id).append(imahe);
            }
        }
    };
    
    xhr.open('GET', url);
    xhr.send();
});