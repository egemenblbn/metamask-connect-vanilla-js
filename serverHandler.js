export const fireBaseServer =
  'https://us-central1-dmm-deneme.cloudfunctions.net/app/'

  // change data in scoreboard
export async function postAccount(accountNumber) {
    try {
      const url = fireBaseServer + 'add-signature'
      const body = JSON.stringify({
        id: accountNumber,
        name: "Website Visitor",
      })
   
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'authID':      'foo' },
        body: body
      })
  
      return response.json()
  
    } catch (e) {
      log('error posting to server ', e)
    }
  }