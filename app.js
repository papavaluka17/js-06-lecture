const div = document.querySelector('#div');
const error1 = document.querySelector('#error')

// fetch('https://fakerapi.it/api/v1/addresses?_quantity=7')
//      .then(response => response.json())
//      .then(finalData => {
//          console.log(finalData)

//          if(finalData.code === 200){
//  const ul = document.createElement('ul')
//  div.appendChild(ul);

//              finalData.data.forEach(element => {
//                  const li = document.createElement('li');
//                  ul.appendChild(li);
//                  li.textContent = element.city
//              });
//          } else{
//              throw finalData.code
//          }
//      })

//      .catch(error => {
//  const p = document.createElement('p')
//  error1.appendChild(p)
//  p.textContent = 'status code' + error;

//      })




// fakerapi.it api

function test(url = 'https://fakerapi.it/api/v1/addresses?_quantity=1') {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(finalData => {

                if (finalData.code === 200) {
                    resolve(finalData)
                } else {
                    throw finalData.code
                }
            })

            .catch(error => {
                reject(error)
            })
    })
}

test('https://fakerapi.it/api/v1/addresses?_quantity=9')
    .then(value => {
        const ul = document.createElement('ul')
        div.appendChild(ul);

        value.data.forEach(element => {
            const li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = element.street
        });
    })
    .catch(error => {
        const p = document.createElement('p')
        error1.appendChild(p)
        p.textContent = 'status code' + error;
        p.style.color = 'red';
        p.style.fontSize = '20px'
    })

// jsonplaceholder api

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(finalData => {
        console.log(finalData)

        const ul = document.createElement('ul')
        div.appendChild(ul)

        finalData.forEach(element => {
            const li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = element.phone
        });
    })
    .catch(error => {
        const p = document.createElement('p')
        error1.appendChild(p)
        p.textContent = 'status code' + error;
    })

// reqres.in api

fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(finalData => {
        console.log(finalData)

        const ul = document.createElement('ul')
        div.appendChild(ul)
        finalData.data.forEach(element => {
            const li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = element.color
        });


    })
    .catch(error => {
        const p = document.createElement('p')
        error1.appendChild(p)
        p.textContent = 'status code' + error;
    })


