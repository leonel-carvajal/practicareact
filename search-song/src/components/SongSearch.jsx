import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import styled, { createGlobalStyle } from 'styled-components';
import { helpHttp } from '../helpers/helpHttp';

const GlobalStyles = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
  h2{
    margin:0;
  }
`
const Title = styled.h1`
  margin-top:0;
  padding:0.5em;
  text-align:center;
  background-color:#ffb74d;
  color:#fff;
`
const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) {
      return
    }
    const fetchData = async () => {
      const { artist, song } = search
      let artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      setLoading(true)
      const [artistRes, songRest] = await Promise.all([
        helpHttp().get(artistURL),
        helpHttp().get(songURL)
      ]);
      setBio(artistRes)
      setLyric(songRest)
      setLoading(false)
    }
    fetchData()
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data)
  }

  return (
    <>
      <GlobalStyles />
      <Title>Song Search</Title>
      <SongForm handleSearch={handleSearch} />
      {loading && <Loader />}
      {search && !loading && (
        <SongDetails bio={bio} lyric={lyric} search={search} />
      )}

    </>
  )
}

export default SongSearch
