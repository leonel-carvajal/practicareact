import React from 'react'
import styled from 'styled-components';

const Card = styled.section`
  padding:1em;
  margin-right:1em;
  background-color:#aaa;
  color:#fff;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  `

const CardHeader = styled.div`
  display:flex;
  flex-direction:column-reverse;
  justify-content:space-around;
  align-items:flex-start;
  position:relative;
  `

const CardBody = styled.div`
  background-color:#222;
  border-radius:10px;
  padding:1em;
  `

const Title = styled.h2`
  width:100%;
  text-align:center;
  margin:0;
  color:orange;
  `
const Image = styled.img`
  max-width:50%;
  `
const Link = styled.a`
  display:block;
  text-decoration:none;
  text-align:center;
  line-height:40px;
  width:100px;
  height:40px;
  background-color:orange;
  color:#fff;
  position:absolute;
  right:0;
  top:0;
  border-radius:10px;
  font-weight:bold;
`
const Mes = styled(Link)``
const SongArtist = ({ bio }) => {
  let info = bio.artists[0];
  return (
    <div>
      <Card>
        <CardHeader>
          <Title>{info.strArtist}</Title>
          <Image src={info.strArtistThumb} />
          {info.strLastFMChart ?
            <Link
              href={info.strLastFMChart}
              target="_blank"
              rel="noreferrer"
            >MUSICA</Link>
            :
            <Mes>No page found</Mes>
          }
        </CardHeader>
        <CardBody>
          <p>{info.strBiographyES}</p>
        </CardBody>
      </Card>
    </div>
  )
}
export default SongArtist;
