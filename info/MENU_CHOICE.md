# Create MenuChoice

### Query

```
mutation createMenuHeader($name: String!, $id: String!) {
  createMenuHeader(name: $name, id: $id) {
    name
	id
  }
}
```

### Variables

```
{
    "name": "header 3",
    <!-- MenuItem ID -->
  	"id": "ck6y61bdo00af0840pve312c6"
}
```
