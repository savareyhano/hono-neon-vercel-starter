## User

### Login with google

- URL
  - `/api/login/google`
- Method
  - `GET`

### Get User logged in

- URL
  - `/api/users/me`
- Method
  - `GET`
- Headers:
  - `Cookie`: `access_token=<accessToken>`
- Response

```json
{
  "status": "success",
  "message": "User retrieved",
  "data": {
    "id": "476cf26a-6398-4c3c-8575-ae8ec36bca8c",
    "name": "example",
    "email": "example@email.com",
    "picture": "https://lh3.googleusercontent.com/a/xxxx"
  }
}
```
