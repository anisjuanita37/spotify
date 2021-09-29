import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

constructor(private _http: HttpClient) { }

getHeader(query: string){
  const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQDKs608N8_kaVYvoWyXEPFufiai7VmgXTJqU5fSggilYEhh4qyld-C5iBiQT_RxTVsgiAwY2h_0PQCXja_-07aw5l1gqNARZKojxPhOlqoRaRReyGurVWPsI2RS13bSYPz712tZ--hQLqOmFLQhN5PuZ3L0-I0"
      );
    return this._http.get(url, { headers });
}

searchMusic(str: string, type = 'artist') {
  const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
  const query = 'search?query=' + str + param;
  return this.getHeader(query);
}

getArtist(id: string):any {
  const query = 'artists/${id}';
  return this.getArtist(query);
}

}
