import api from './api';
import { SongEndpoints } from './api/Endpoints';

const getSongs = async () =>
  api.get(SongEndpoints.get);


  export default {
    getSongs
  };
  