# Register User

### Query

```
mutation registerUser($email: String!, $name: String!, $password: String!) {
  registerUser(name: $name, email: $email, password: $password) {
    user {
      name
      id
    }
    token
  }
}
```

### Variables

```
{
  "email": "jacksmalloy@gmail.com",
  "name": "jackson malloy",
  "password": "123456"
}
```

## HTTP Headers

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazZoYzNnZ20wMDBkMDg0NHpiZmNzY2ZoIiwiaWF0IjoxNTgxMzkyMjE3fQ.4qCVYbKiz0CJlFAqkdMSdbk01ppTxo0jQcTzyDv5EnM"
}
```

# Login User

### Query

```
mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    user {
      id
    }
    token
  }
}
```

### Variables

```
{
  "email": "jacksmalloy@gmail.com",
  "password": "123456"
}
```
