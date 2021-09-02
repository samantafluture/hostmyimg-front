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
    return this.http.get<Uploads>(`${API}/posts/`);
  }

  getFileById(_id: string): Observable<Upload> {
    return this.http.get<Upload>(`${API}/posts/${_id}`);
  }

  deleteFile(_id: string): Observable<Upload> {
    return this.http.delete<Upload>(`${API}/posts/${_id}`);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${API}/posts/`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
