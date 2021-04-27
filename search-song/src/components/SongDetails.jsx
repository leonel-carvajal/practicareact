import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import styled from 'styled-components';
import Message from './Message';

const Container = styled.section`
  width:80%;
  margin-right:auto;
  margin-left:auto;
  padding:1em;
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
`
const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) {
    return null
  }

  return (
    <>
      <Container>
        {bio.artists ?
          <SongArtist bio={bio} />
          :
          <Message
            bgColor='#dc3545'
            error={`No existe el interprete: ${search.artist}`}
          />}

        {lyric.error || lyric.err || lyric.name === 'AbortError' ?
          <Message
            bgColor='#dc3545'
            error={`Error no existe la cancion: ${search.song}`}
          />
          : <SongLyric lyric={lyric} name={search.song} />}
      </Container>
    </>
  )
}

export default SongDetails
