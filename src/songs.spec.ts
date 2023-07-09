import { credentials } from 'grpc';
import { SongsClient, SongRequest } from './grpc/songs';

describe('SongsClient', () => {
    let client: SongsClient;

    beforeEach(() => {
        client = new SongsClient('http://localhost:5000', credentials.createInsecure(), undefined);
    })

    it('should create the client', () => {
        expect(client).toBeDefined();
    })

    it('should be able to request stuffs', (done) => {
        const request = new SongRequest();
        request.setSongId(123);
        client.getSong(request, (error, song) => {
            try {
                expect(error).toBeUndefined();
                expect(song).toBeDefined();
            } finally {
                done();
            }
        });
    })

    afterEach(() => {
        client.close();
    })
})