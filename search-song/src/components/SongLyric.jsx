import React from 'react'
import styled from 'styled-components';

const Container = styled.section`
  padding:3em;
  background-color:#1b003a;
  color:#fff;
  border-radius:10px;
`
const LyricInfo = styled.p`
  line-height:1.4em;
`
const TitleSong = styled.h2`
  text-align: center;
  font-size: 1.8em;
  text-transform: uppercase;
`;
const SongLyric = ({ lyric, name }) => {
  return (
    <>
      <Container>
        <TitleSong>{name}</TitleSong>
        <LyricInfo>{lyric.lyrics}</LyricInfo>
      </Container>
    </>
  )
}

export default SongLyric;
