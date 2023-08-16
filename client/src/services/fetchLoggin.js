export async function fetchLoggin(event, changeLoggedIn){
    
    const fields = new window.FormData(event.target);
    const user = fields.get('username')
    const pass = fields.get('password')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user, password: pass })
    };

    const response = await fetch('./login', requestOptions)

    if (response.status >= 300){
      console.log("Error")
    } else if (response.status === 200){
      localStorage.setItem('jwt', `Bearer ${response.text()}`)
      changeLoggedIn(true)
    }
  
}