# ENDPOINTS

## Auth Endpoints

**All Auth endpoints starts with `/api/auth`**

### Register User

- **URL**: `/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:

  - 201 Created

  ```json
  {
    "message": "Registration successful! Please check your email for a confirmation link."
  }
  ```

  - 409 Conflict:

  ```json
  {
    "message": "Email already registered."
  }
  ```

### Confirm email

- **URL**: `/register/confirm/{token}`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "password": "password123"
  }
  ```
- **Response**:

  - 200 OK

  ```json
  {
    "message": "Your email has been successfully confirmed."
  }
  ```

  - 422 Unprocessable Content:

  ```json
  {
    "message": "Please check your email for a confirmation link."
  }
  ```

### Login User

- **URL**: `/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:

  - 204 No content

  - 422 Unprocessable Content:

  ```json
  {
    "message": "Please check your email for a confirmation link."
  }
  ```

### Request reset password

- **URL**: `/password-reset`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response**:

  - 200 OK

  ```json
  {
    "message": "Password reset link has been sent to your email."
  }
  ```

### Confirm reset password

- **URL**: `/password-reset/confirm/{token}`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "newPassword": "password123",
    "newPasswordConfirm": "password123"
  }
  ```
- **Response**:

  - 200 OK

  ```json
  {
    "message": "Your password has been successfully reset."
  }
  ```

  - 400 Bad Request

  ```json
  {
    "message": "Invalid or expired token."
  }
  ```

  - 422 Bad Request

  ```json
  {
    "message": "New password not valid/match."
  }
  ```

### Update name

- **URL**: `/settings`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "name": "new name"
  }
  ```
- **Response**:

  - 200 OK

  ```json
  {
    "message": "Updated successfully!"
  }
  ```

  - 400 Bad Request

  ```json
  {
    "message": "Invalid new name."
  }
  ```

  - 401 Unauthorized

  ```json
  {
    "message": "Unauthorized."
  }
  ```

  - 404 Not Found

  ```json
  {
    "message": "User not exists."
  }
  ```
