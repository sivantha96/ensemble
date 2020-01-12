import api from './api';
import { SongEndpoints } from './api/Endpoints';

const getAllSongs = async () =>
  api.get(SongEndpoints.getAll);

  const getSong = async (id) =>
  api.get(SongEndpoints.getSong/id);

  const addSong = async (songObject) =>
  api.post(SongEndpoints.create, songObject);
  
  const updateSong = async (songObject) =>
  api.get(SongEndpoints.update, songObject);

  const deleteSong = async (id) =>
  api.get(SongEndpoints.delete/id);


  export default {
    getSong,
    getAllSongs,
    addSong,
    updateSong,
    deleteSong
  };
  