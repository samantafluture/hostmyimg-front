import { Upload, Uploads } from '../interfaces/upload';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  getAllFiles(): Observable<Uploads> {
    return this.http.get<Uploads>(`${API}/posts/free`);
  }

  getFileById(_id: string): Observable<Upload> {
    return this.http.get<Upload>(`${API}/posts/free/${_id}`);
  }

  deleteFile(_id: string): Observable<Upload> {
    return this.http.delete<Upload>(`${API}/posts/free/${_id}`);
  }

  uploadFile(name: string, size: any, url: string, file: File) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('size', size.toString());
    formData.append('url', url);
    formData.append('file', file);

    return this.http.post(`${API}/posts/free`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
