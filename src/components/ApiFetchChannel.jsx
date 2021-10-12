import React, { useState, useCallback } from 'react';
import axios from 'axios';

export const ApiFetchChannel = () => {
  const channelrequest =
    'https://api.json-generator.com/templates/6QfiqW5sFcq2/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj';

  const [channel, setChannel] = useState([]);

  const getChannel =useCallback(() => {
    console.log('channelrequest');
    axios
      .get(channelrequest)
      .then((res) => {
        setChannel(res.data);
        console.log('channelrequest.res.data', res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return { getChannel,channel };
};
