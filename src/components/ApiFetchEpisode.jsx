import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'

export const ApiFetchEpisode = (id) => {
  console.log('ApiFetch_id', id)
  const request517 ='https://api.json-generator.com/templates/WqGcLYvojWBC/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj';
  const request518 ='https://api.json-generator.com/templates/O-xcv2SiR9dL/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj';
  const request365 ='https://api.json-generator.com/templates/oHnEl6sllb86/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj';
  const request366 ='https://api.json-generator.com/templates/r-9gwrJr2q0p/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj';
  const request367 ='https://api.json-generator.com/templates/cRvuCQN-Iwc3/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj';
  const [episode, setEpisode] = useState([]);

 const getEpisode = useCallback(()=> {
     if (id === '517') {
       console.log('517axios');
       axios.get(request517).then((res) => {
         setEpisode(res.data);
         console.log('517axios.res.data', res.data);
       });
     } else if (id === '518') {
       console.log('518axios');
       axios.get(request518).then((res) => {
         setEpisode(res.data);
       });
     } else if (id === '365') {
       console.log('365axios');
       axios.get(request365).then((res) => {
         setEpisode(res.data);
       });
     } else if (id === '366') {
       console.log('366axios');
       axios.get(request366).then((res) => {
         setEpisode(res.data);
       });
     } else if (id === '367') {
       console.log('367axios');
       axios.get(request367).then((res) => {
         setEpisode(res.data);
       });
     }
 })




  return { getEpisode,episode };
}