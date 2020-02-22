# Create MenuItem

### Query

```
mutation createMenuItem($name: String!, $id: String!, $basePrice: String!) {
  createMenuItem(name: $name, id: $id, basePrice: $basePrice) {
    name
	id
  }
}
```

### Variables

```
{
    "name": "here is another menu item!",
    <!-- Menu ID -->
  	"id": "ck6y1ly6m009s07405w6yntzx",
  	"basePrice": "4.50"
}
```
