import React,{useState} from 'react'
import styled from 'styled-components';

const InputArtist = styled.input`
  padding:0.8em;
  outline:none;
  border:1px solid #333;
  border-radius:5px;
  margin-right:10px;
  text-align:center;
`
const InputSong = styled(InputArtist)``

const InputButton = styled.input`
width:75px;
  padding:0.8em;
  outline:none;
  border:1px solid #333;
  margin-right:10px;
  border-radius:10px;
  background-color:orange;
  color:#fff;
  font-size:1em
`
const initialForm = {
  artist : '',
  song :'',
}
const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const hanldeSubmit = (e) => {
    e.preventDefault()
    if (!form.artist || !form.song) {
      window.alert('Datos incompletos')
      return
    } else {
      handleSearch(form)
      setForm(initialForm)
    }
  }
  return (
    <>
      <form onSubmit={hanldeSubmit}>
        <InputArtist
          name='artist'
          onChange={handleChange}
          placeholder='Nombre del Artista'
          type='text'
          value={form.artist}
        />
        <InputSong
          name='song'
          onChange={handleChange}
          placeholder='Nombre de la canción'
          type='text'
          value={form.song}
        />
        <InputButton type='submit' value='Enviar'/>
      </form>
    </>
  )
}

export default SongForm
