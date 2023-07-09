// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var song2_pb = require('./song2_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_songs2_Comment(arg) {
  if (!(arg instanceof song2_pb.Comment)) {
    throw new Error('Expected argument of type songs2.Comment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_songs2_Comment(buffer_arg) {
  return song2_pb.Comment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_songs2_Song(arg) {
  if (!(arg instanceof song2_pb.Song)) {
    throw new Error('Expected argument of type songs2.Song');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_songs2_Song(buffer_arg) {
  return song2_pb.Song.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_songs2_SongRequest(arg) {
  if (!(arg instanceof song2_pb.SongRequest)) {
    throw new Error('Expected argument of type songs2.SongRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_songs2_SongRequest(buffer_arg) {
  return song2_pb.SongRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SongsService = exports.SongsService = {
  getSong: {
    path: '/songs2.Songs/GetSong',
    requestStream: false,
    responseStream: false,
    requestType: song2_pb.SongRequest,
    responseType: song2_pb.Song,
    requestSerialize: serialize_songs2_SongRequest,
    requestDeserialize: deserialize_songs2_SongRequest,
    responseSerialize: serialize_songs2_Song,
    responseDeserialize: deserialize_songs2_Song,
  },
  addSongs: {
    path: '/songs2.Songs/AddSongs',
    requestStream: true,
    responseStream: false,
    requestType: song2_pb.Song,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_songs2_Song,
    requestDeserialize: deserialize_songs2_Song,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getChat: {
    path: '/songs2.Songs/GetChat',
    requestStream: false,
    responseStream: true,
    requestType: song2_pb.Song,
    responseType: song2_pb.Comment,
    requestSerialize: serialize_songs2_Song,
    requestDeserialize: deserialize_songs2_Song,
    responseSerialize: serialize_songs2_Comment,
    responseDeserialize: deserialize_songs2_Comment,
  },
  liveChat: {
    path: '/songs2.Songs/LiveChat',
    requestStream: true,
    responseStream: true,
    requestType: song2_pb.Comment,
    responseType: song2_pb.Comment,
    requestSerialize: serialize_songs2_Comment,
    requestDeserialize: deserialize_songs2_Comment,
    responseSerialize: serialize_songs2_Comment,
    responseDeserialize: deserialize_songs2_Comment,
  },
};

exports.SongsClient = grpc.makeGenericClientConstructor(SongsService);
