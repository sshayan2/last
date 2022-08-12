let hire = document.getElementById('hire')
let comment = document.getElementById('comment')
let question = document.getElementById('question')
let hourContainer = document.querySelector('.hour-container')
let purpose = ''
// click event 
let choose = ''
hire.addEventListener('click', hire);
//call the hire function
function hire() {
    choose = 'Hire'
    hourContainer.style.display = "block"
}
question.addEventListener('click', question)
function question() {
    choose = 'Question'
    hourContainer.style.display = "none"
}

comment.addEventListener('click', comment)
function comment() {
    choose = 'Comment'
    hourContainer.style.display = "none"
}

let Name = document.getElementById('name')
let email = document.getElementById('email')
let postcode = document.getElementById('post')
let city = document.getElementById('city')
let age = document.getElementById('age')
let hourInput = document.getElementById('hour')
let message = document.getElementById('message')
let form = document.querySelector('.form')


form.onsubmit = function (item) {
    item.preventDefault()
    const validPostCode = /^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/.test(postcode.value)
    if (!validPostCode) return
    if (Name.value && email.value && city.value && age.value && purpose && message.value) {
        if (purpose === 'Hire' && !hourInput.value) return
        fetch('https://httpbin.org/post',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    name: Name.value,
                    postcode: postcode.value,
                    email: email.value,
                    city: city.value,
                    reason: purpose,
                    age: age.value,
                    message: message.value,
                    hourRate: hourInput.value ? hourInput.value : undefined
                })
            }).then(response => {
                console.log(response)
                if (response.ok) {
                    resetValues()
                }
            })
    }
}

function resetValues() {
    Name.value = ''
    postcode.value = ''
    email.value = ""
    city.value = ""
    reason = ""
    age.value = ''
    hourInput.value = ''
    message.value = ''
    hire.checked = false
    question.checked = false
    comment.checked = false
}