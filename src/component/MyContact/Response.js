
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyjkqgioCubN3IBhHIIuBCtqZJtxkXOFFj4F6bQh2pbZI4qDvGGH259XcHJEgbEl7aRNw/exec'
      const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
              msg.innerHTML = "message sent sucessfully"
              setTimeout(function(){
                  msg.innerHTML =""
              },5000)
              form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })
   
    