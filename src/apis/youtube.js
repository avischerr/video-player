import axios from 'axios';

const KEY = 'AIzaSyACV9HbVMXZ4J4z93x2Xthdo_wPQrp7ryE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});