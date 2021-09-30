import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const ApiFetch = (id) => {
  console.log('ApiFetch_id', id)
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    if(id === '517'){
      console.log('517axios');
       axios.get('https://api.json-generator.com/templates/WqGcLYvojWBC/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj').then(res=> {
      setEpisode(res.data)
    })
    } else if(id === '518'){
      console.log('518axios');
       axios.get('https://api.json-generator.com/templates/O-xcv2SiR9dL/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj').then(res=> {
      setEpisode(res.data)
    })
    } else if(id === '365'){
      console.log('365axios');
       axios.get('https://api.json-generator.com/templates/oHnEl6sllb86/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj').then(res=> {
      setEpisode(res.data)
    })
    } else if(id === '366'){
      console.log('366axios');
       axios.get('https://api.json-generator.com/templates/r-9gwrJr2q0p/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj').then(res=> {
      setEpisode(res.data)
    })
    } else if(id === '367'){
      console.log('367axios');
       axios.get('https://api.json-generator.com/templates/cRvuCQN-Iwc3/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj').then(res=> {
      setEpisode(res.data)
    })
    }

  },[])


  return (
   episode
  )
}