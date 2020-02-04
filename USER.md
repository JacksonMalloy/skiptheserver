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
  "name": "jackson malloy"
  "password": "123456"
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
