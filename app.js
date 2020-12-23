const jokeDiv = document.querySelector('.joke-js');
let joke;

document.querySelector('#btn').addEventListener('click', showJoke)


// await create_joke();
// jokeDiv.classList.add("joke");
// jokeDiv.firstElementChild.textContent = joke;
// console.log(joke);
// // .catch(console.log('something went wrnog')
// // 


async function showJoke() {
    await create_joke();
    jokeDiv.classList.add("joke");
    jokeDiv.firstElementChild.textContent = joke;
    console.log(joke);
}

function create_joke() {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://api.icndb.com/jokes/random", true);
        xhr.onload = function() {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                joke = response.value.joke;
                // console.log(response);
                // const error = fa;
                if (joke) {
                    resolve();
                } else {
                    reject()
                };
            };
        };
        xhr.send()

    });
};