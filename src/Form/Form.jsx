import React from 'react'

export default function Form() {
  return (
    <>
<form>
      <fieldset style={{width: '500px'}}>
        <legend style={{color: 'brown', fontStyle:'italic'}}>Форма регистрации</legend>
      <label style={{color: 'blue', fontStyle:'italic'}}>Ваше имя <input type="text" placeholder='Введите своё имя'/> </label>
      <p><label style={{color: 'blue', fontStyle:'italic'}}>Ваша фамилия <input type="text" placeholder='Введите свою фамилию'/> </label></p>
      </fieldset>
      <button style={{backgroundColor:'pink', border:'none', height:'30px', marginTop:'10px'}}>Зарегистрироваться</button>
    </form>
    </>
  )
}
