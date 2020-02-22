# Create MenuSelection

### Query

```
mutation createMenuSelection($name: String!, $id: String!) {
  createMenuSelection(name: $name, id: $id) {
    name
	id
  }
}
```

### Variables

```
{
    "name": "This is another selection",
    <!-- MenuChoice ID -->
  	"id": "ck6y61bdo00af0840pve312c6"
}
```
