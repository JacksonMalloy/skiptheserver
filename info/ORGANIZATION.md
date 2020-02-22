# Create Organization

### Query

```
mutation createOrganization($name: String!, $id: String!) {
  createOrganization(name: $name, id: $id) {
    name
    id
  }
}
```

### Variables

```
{
    "name": "testing query10",
    <!-- user ID -->
  	"id": "ck6y1knw0008w0740stwugzd9"
}
```
