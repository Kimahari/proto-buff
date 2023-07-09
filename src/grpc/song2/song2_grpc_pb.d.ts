// package: songs2
// file: song2.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as song2_pb from "./song2_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ISongsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSong: ISongsService_IGetSong;
    addSongs: ISongsService_IAddSongs;
    getChat: ISongsService_IGetChat;
    liveChat: ISongsService_ILiveChat;
}

interface ISongsService_IGetSong extends grpc.MethodDefinition<song2_pb.SongRequest, song2_pb.Song> {
    path: "/songs2.Songs/GetSong";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<song2_pb.SongRequest>;
    requestDeserialize: grpc.deserialize<song2_pb.SongRequest>;
    responseSerialize: grpc.serialize<song2_pb.Song>;
    responseDeserialize: grpc.deserialize<song2_pb.Song>;
}
interface ISongsService_IAddSongs extends grpc.MethodDefinition<song2_pb.Song, google_protobuf_empty_pb.Empty> {
    path: "/songs2.Songs/AddSongs";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<song2_pb.Song>;
    requestDeserialize: grpc.deserialize<song2_pb.Song>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISongsService_IGetChat extends grpc.MethodDefinition<song2_pb.Song, song2_pb.Comment> {
    path: "/songs2.Songs/GetChat";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<song2_pb.Song>;
    requestDeserialize: grpc.deserialize<song2_pb.Song>;
    responseSerialize: grpc.serialize<song2_pb.Comment>;
    responseDeserialize: grpc.deserialize<song2_pb.Comment>;
}
interface ISongsService_ILiveChat extends grpc.MethodDefinition<song2_pb.Comment, song2_pb.Comment> {
    path: "/songs2.Songs/LiveChat";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<song2_pb.Comment>;
    requestDeserialize: grpc.deserialize<song2_pb.Comment>;
    responseSerialize: grpc.serialize<song2_pb.Comment>;
    responseDeserialize: grpc.deserialize<song2_pb.Comment>;
}

export const SongsService: ISongsService;

export interface ISongsServer {
    getSong: grpc.handleUnaryCall<song2_pb.SongRequest, song2_pb.Song>;
    addSongs: grpc.handleClientStreamingCall<song2_pb.Song, google_protobuf_empty_pb.Empty>;
    getChat: grpc.handleServerStreamingCall<song2_pb.Song, song2_pb.Comment>;
    liveChat: grpc.handleBidiStreamingCall<song2_pb.Comment, song2_pb.Comment>;
}

export interface ISongsClient {
    getSong(request: song2_pb.SongRequest, callback: (error: grpc.ServiceError | null, response: song2_pb.Song) => void): grpc.ClientUnaryCall;
    getSong(request: song2_pb.SongRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: song2_pb.Song) => void): grpc.ClientUnaryCall;
    getSong(request: song2_pb.SongRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: song2_pb.Song) => void): grpc.ClientUnaryCall;
    addSongs(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<song2_pb.Song>;
    addSongs(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<song2_pb.Song>;
    addSongs(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<song2_pb.Song>;
    addSongs(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<song2_pb.Song>;
    getChat(request: song2_pb.Song, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<song2_pb.Comment>;
    getChat(request: song2_pb.Song, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<song2_pb.Comment>;
    liveChat(): grpc.ClientDuplexStream<song2_pb.Comment, song2_pb.Comment>;
    liveChat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<song2_pb.Comment, song2_pb.Comment>;
    liveChat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<song2_pb.Comment, song2_pb.Comment>;
}

export class SongsClient extends grpc.Client implements ISongsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSong(request: song2_pb.SongRequest, callback: (error: grpc.ServiceError | null, response: song2_pb.Song) => void): grpc.ClientUnaryCall;
    public getSong(request: song2_pb.SongRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: song2_pb.Song) => void): grpc.ClientUnaryCall;
    public getSong(request: song2_pb.SongRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: song2_pb.Song) => void): grpc.ClientUnaryCall;
    public addSongs(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<song2_pb.Song>;
    public addSongs(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<song2_pb.Song>;
    public addSongs(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<song2_pb.Song>;
    public addSongs(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<song2_pb.Song>;
    public getChat(request: song2_pb.Song, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<song2_pb.Comment>;
    public getChat(request: song2_pb.Song, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<song2_pb.Comment>;
    public liveChat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<song2_pb.Comment, song2_pb.Comment>;
    public liveChat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<song2_pb.Comment, song2_pb.Comment>;
}
